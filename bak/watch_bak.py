import time
import re
import subprocess
import os
import hashlib
import warnings
import datetime
import random
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
        total_time_start = time.perf_counter()
        log_path = '../result/chart-log/' 
        commited_file_path = event.src_path
        commited_file_name = os.path.basename(commited_file_path)
        commit_group_path = os.path.dirname(commited_file_path)
        commit_group_name = os.path.basename(commit_group_path)
        commit_group_num = commit_group_name[-2:]
        dt_now = datetime.datetime.now()
        print(dt_now.strftime('%Y/%m/%d %H:%M:%S') + ': ' + "group" + commit_group_num +" commit")
        id = os.path.splitext(commited_file_name)[1][1:]
        snake_port = '80' + commit_group_num
        snake_url = 'http://localhost:' + snake_port
        server_file = 'groups/' + commit_group_name + '/server.' + id
        #server.pyのportを80+チームNoを使用するように書き換え
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
        #対戦num_game回実行
        game_time_start = time.perf_counter()
        num_game = 3 #ここで対戦回数決定
        random.seed(10)
        score = []
        game_id = []
        sum = 0
        for i in range(num_game):
            #seed値はランダムで決定。randomのシード値を固定しているめ再現性有
            seed = random.randint(1,50)
            battlesnake_solo = 'battlesnake play -W 7 -H 7 --name snake' + commit_group_num + \
            ' --url '+snake_url+' -g solo --seed ' + str(seed)
            print("seed : "+ str(seed))
            result = subprocess.run(battlesnake_solo,shell=True,capture_output=True,text=True)
            #gameidを得る
            game_id.append(result.stdout.strip())
            print("gameid : " + game_id[i])
            #scoreを得る
            score.append(str(int(result.stderr.split()[-2]) -1))
            print("score : " + score[i])
            sum += int(score[i])
        proc.kill()
        game_time_end = time.perf_counter()
        #テキストファイルからランキングを抽出
        with open('ranking.txt','r') as f:
            lines = f.readlines()
            txt_score = lines[-1].split()[2:] #冒頭(0-1)は更新時間 
        average_score = round(sum/num_game)
        print("average score : " + str(average_score))
        #テキストファイルにはnum_game回のスコアの平均値を書き込む
        txt_score[int(commit_group_num)-1] = str(average_score)
        dt_now = datetime.datetime.now()
        now_time = dt_now.strftime('%m/%d %H:%M:%S ')
        with open('ranking.txt','a') as f:
            f.write('\n')
            f.write(now_time)
            f.writelines(' '.join(txt_score))
        make_chart(int(commit_group_num),game_id[0]) #図作成,命名は最初の対戦のgameid.それに伴いadd-pageもこれを参照する
        update_web(int(commit_group_num),game_id,score,num_game,now_time) #webサイトを更新
        #slackへ投稿
        chart = log_path + game_id[0] + '.png'
        channel = '#cc'
        with open('.env','r') as f:
            token = f.readline()
        cc_url = 'https://tyr.ics.es.osaka-u.ac.jp/cc/'
        slack_chart_url = 'https://slack.com/api/files.upload'
        slack_message_url = 'https://slack.com/api/chat.postMessage'
        slack_chart = 'curl -F file=@'+chart+' -F channels='+channel+' -H "Authorization: Bearer '+token+'" '+slack_chart_url
        slack_message = 'curl -X POST ' + slack_message_url +\
        ' -d token=' + token +\
        ' -d channel=' + channel + \
        ' -d text=' + cc_url
        subprocess.run(slack_chart,shell=True,capture_output=True,text=True)
        subprocess.run(slack_message,shell=True,capture_output=True,text=True)
        total_time_end = time.perf_counter()
        total_time = total_time_end-total_time_start
        game_time = game_time_end-game_time_start
        print('game time : ' + str(game_time))
        print('total time : ' + str(total_time))
        print('*****************************************')
        
    
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
