import time
import re
import subprocess
import os
import hashlib
import warnings
import datetime
from bumpchart import make_chart
from update_web_html import update_web
from watchdog.observers.polling import PollingObserver
from watchdog.events import PatternMatchingEventHandler

warnings.simplefilter('ignore')


f_write = open('ranking.txt')
#main.py(蛇)実行+実行完了まで待機，対戦開始，蛇をkill(killしないと最初の蛇がポート独占)
class WatchdogHandler(PatternMatchingEventHandler):
    def on_modified(self, event):
        log_path = '../result/chart-log/' 
        commited_file_path = event.src_path
        commited_file_name = os.path.basename(commited_file_path)
        commit_group_path = os.path.dirname(commited_file_path)
        commit_group_name = os.path.basename(commit_group_path)
        commit_group_num = commit_group_name[-2:]
        print("group" + commit_group_num +" commit")
        id = os.path.splitext(commited_file_name)[1][1:]
        snake_port = '80' + commit_group_num
        snake_url = 'http://localhost:' + snake_port
        server_file = 'groups/' + commit_group_name + '/server.' + id
        battlesnake_solo = 'battlesnake play -W 7 -H 7 --name snake' + commit_group_num + \
            ' --url '+snake_url+' -g solo --seed 1'
        #server.pyのportを80+チームナンバを使用するように書き換え
        with open(server_file,'r') as f:
            data = f.read()
        data = data.replace('8000',snake_port)
        print("server.py use " + snake_port + " in group" + commit_group_num)
        with open (server_file, 'w') as f:
            f.write(data)
        #蛇プログラム実行
        #python(id = py)の場合は実行するだけ
        if(id == 'py'): proc = subprocess.Popen(["python3", commited_file_path],stdout=subprocess.PIPE, stderr=subprocess.PIPE)
        else:
            print('cannnot run wasnakefile')
            return
        time.sleep(2)
        #ファイルが実行エラーとなる場合は終了する
        if proc.poll() != None:
            print("snakefile does not run")
            return
        #対戦実行
        result = subprocess.run(battlesnake_solo,shell=True,capture_output=True,text=True)
        proc.kill()
        #gameidを得る
        game_id = result.stdout.strip()
        #テキストファイルからランキングを抽出
        with open('ranking.txt','r') as f:
            lines = f.readlines()
            score = lines[-1].split()[2:] #冒頭(0-1)は更新時間 
        score[int(commit_group_num)-1] = str(int(result.stderr.split()[-2]) -1)
        dt_now = datetime.datetime.now()
        with open('ranking.txt','a') as f:
            f.write('\n')
            f.write(dt_now.strftime('%m/%d %H:%M:%S '))
            f.writelines(' '.join(score))
        make_chart(int(commit_group_num),game_id) #図作成
        update_web(int(commit_group_num),game_id,score[int(commit_group_num)-1]) #webサイトを更新
        #slackへ投稿
        chart = log_path + game_id + '.png'
        channel = '#cc'
        with open('.env','r') as f:
            line = f.readline()
        token = 'Bearer ' + line
        slack_url = 'https://slack.com/api/files.upload'
        reporter = 'curl -F file=@'+chart+' -F channels='+channel+' -H "Authorization: '+token+'" '+slack_url
        subprocess.run(reporter,shell=True,capture_output=True,text=True)
        print('***********************************')
    
if __name__ == "__main__":
    #main.pyの更新のみを取るようにpattermatching
    path = "groups"
    target_file = ['pblb2023g*/main.py']
    event_handler = WatchdogHandler(target_file)
    observer = PollingObserver()
    observer.schedule(event_handler, path, recursive=True)
    observer.start()
    try:
        while True:
            time.sleep(1)
    except KeyboardInterrupt:
        observer.stop()
    observer.join()
