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
from update_web_html-duel import update_web
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
        dt_now = datetime.datetime.now()
        print(dt_now.strftime('%Y/%m/%d %H:%M:%S') + ': ' + "group" + commit_group_num +" commit")
        id = os.path.splitext(commited_file_name)[1][1:]
        snake_port = '80' + commit_group_num
        commi_snake_url = 'http://localhost:' + snake_port
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
        if(id == 'py'): commit_group_proc = subprocess.Popen(["python3", commited_file_path],stdout=subprocess.PIPE, stderr=subprocess.PIPE)
        else:
            print('cannnot run wasnakefile')
            return
        time.sleep(2)
        #ファイルが実行エラーとなる場合は終了する
        if commit_group_proc.poll() != None:
            print("snakefile does not run")
            return
        num_gropus = 14
        for i in range(1,num_gropus+1):
            other_group_num = str(i)
            other_snake_port = '80' + other_group_num.zfill(2)
            other_groups_file_path = 'groups/pblb2023g' + other_group_num.zfill(2)
            other_snake_url = 'http://localhost:' + other_snake_port
            #対戦num_game回実行
            num_game = 3 #ここで対戦回数決定
            random.seed(10)
            score = [] #13*3個のスコアを格納する
            game_id = []
            sum_score = 0
            print('-----------------------------------------')
            print('vs group' + other_group_num.zfill(2))
            if commit_group_num == i: continue
            #server.pyのportを80+チームNoを使用するように書き換え
            with open(server_file,'r') as f:
                data = f.read()
            data = data.replace('8000',other_snake_port)
            with open (server_file, 'w') as f:
                f.write(data)
            #蛇プログラム実行
            other_group_proc = subprocess.Popen(["python3", other_groups_file_path],stdout=subprocess.PIPE, stderr=subprocess.PIPE)
            time.sleep(2)
            #ファイルが実行エラーとなる場合は終了する
            if other_group_proc.poll() != None:
                print("snakefile does not run")
                continue
            for j in range(num_game):
                score_per_game = 0
                #seed値はランダムで決定。randomのシード値を固定しているめ再現性有
                seed = random.randint(1,50)
                battlesnake_duel = 'battlesnake play -W 11 -H 11 --name snake' + commit_group_num + \
                ' --url '+commi_snake_url+' --name snake' + other_group_num.zfill(2) + ' --url ' + other_snake_url + ' --seed ' + str(seed)
                print("seed : "+ str(seed))
                result = subprocess.run(battlesnake_duel,shell=True,capture_output=True,text=True)
                #gameidを得る
                game_id.append(result.stdout.strip())
                print("gameid : " + game_id[j])
                #scoreを得る
                if 'draw' in result.stderr.split()[-1]:
                    print('result : draw')
                    score_per_game = 1
                elif 'winner' in result.stderr.split()[-1]:
                    winner = result.stderr.split()[-4]
                    print('result : ' + winner + ' is winner')
                    if 'snake' + commit_group_num in winner: score_per_game = 2
                else: continue
                score.append(str(score_per_game))
                print("score : " + score[j])
                sum_score += score_per_game
        commit_group_proc.kill()
        #テキストファイルからランキングを抽出
        with open('ranking.txt','r') as f:
            lines = f.readlines()
            txt_score = lines[-1].split()[2:] #冒頭(0-1)は更新時間 
        print("sum score : " + str(sum_score))
        #テキストファイルにはnum_game回のスコアの合計を書き込む
        txt_score[int(commit_group_num)-1] = str(sum_score)
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
