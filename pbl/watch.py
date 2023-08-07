import time
import re
import subprocess
import os
import hashlib
import warnings
import datetime
from bumpchart import makeChart
from watchdog.observers import Observer
from watchdog.events import PatternMatchingEventHandler

warnings.simplefilter('ignore')


hashes = {}
f_write = open('ranking.txt')
#main.py(蛇)実行+実行完了まで待機，対戦開始，蛇をkill(killしないと最初の蛇がポート独占)
class WatchdogHandler(PatternMatchingEventHandler):
    def on_modified(self, event):
        filepath = event.src_path
        filename = os.path.basename(filepath)
        #一部のosではファイル変更時にイベントが2回飛ぶのでそれの防止
        with open(filepath, 'rb') as f: 
            checksum = hashlib.md5(f.read()).hexdigest()
            if filename not in hashes or (hashes[filename] != checksum):
                hashes[filename] = checksum
            else: 
                return 
        #対戦準備 
        teamName = os.path.basename(os.path.dirname(filepath))
        teamNumber = re.sub(r"\D", "", teamName)
        snakePort = '80'
        snakeURL = 'http://localhost:'
        boardURL = 'http://localhost:3000'
        server_file = 'teams/' + teamName + '/server.py'
        #ポート番号をチームに合わせて設定
        if len(teamNumber) == 1:
            snakePort += ('0' + teamNumber)
        else:
            snakePort += teamNumber
        snakeURL += snakePort
        battlesnake = 'battlesnake play -W 11 -H 11 --name snake'+teamNumber+' --url '+snakeURL+' -g solo --board-url '+boardURL
        #server.pyのportを80+チームナンバを使用するように書き換え
        with open(server_file,'r') as f:
            data = f.read()
        data = data.replace('8000',snakePort)
        with open (server_file, 'w') as f:
            f.write(data)
        #蛇プログラム実行
        proc = subprocess.Popen(["nohup","python", filepath,"&"])
        time.sleep(2)
        #対戦実行
        result = subprocess.run(battlesnake,shell=True,capture_output=True,text=True)
        proc.kill()
        #テキストファイルからランキングを抽出
        with open('ranking.txt','r') as f:
            lines = f.readlines()
            score = lines[-1].split()[2:] #冒頭(0-1)は更新時間 
        score[int(teamNumber)-1] = result.stderr.split()[-2]
        dt_now = datetime.datetime.now()
        with open('ranking.txt','a') as f:
            f.write('\n')
            f.write(dt_now.strftime('%m/%d %H:%M:%S '))
            f.writelines(' '.join(score))
        makeChart(int(teamNumber)) #図作成
        #slackへ投稿
        chart = 'bumpchart.pdf'
        channel = '#ranking'
        token = 'Bearer xoxb-5317725009060-5308824379014-kkVRWwEmaJj2uhNpJjYpcl6M'
        slackURL = 'https://slack.com/api/files.upload'
        reporter = 'curl -F file=@'+chart+' -F channels='+channel+' -H "Authorization: '+token+'" '+slackURL
        subprocess.run(reporter,shell=True,capture_output=True)
    
if __name__ == "__main__":
    #main.pyの更新のみを取るようにpattermatching
    path = "teams"
    target_file = ['team*/main.py']
    event_handler = WatchdogHandler(target_file)
    observer = Observer()
    observer.schedule(event_handler, path, recursive=True)
    observer.start()
    try:
        while True:
            time.sleep(1)
    except KeyboardInterrupt:
        observer.stop()
    observer.join()
