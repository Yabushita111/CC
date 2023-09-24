import http.server
import socketserver
import subprocess
import json
import os
import time
import re
import subprocess
import hashlib
import warnings
import datetime
import random
import datetime
from bumpchart import make_chart
from update_web_html import update_web
from urllib.parse import parse_qs, urlparse
# 全てのリポジトリへのpushが同じurlにアクセスさせて，通知の中身見てどのリポジトリをpullすれば良いか判断したい
class MyHandler(http.server.BaseHTTPRequestHandler):
    def do_POST(self):
        total_time_start = time.perf_counter()
        content_length = int(self.headers['content-length'])
        req_body = self.rfile.read(content_length).decode("utf-8")
        j = json.loads(req_body)
        commit_group_name = j["repository"]["name"]
        commit_group_path = os.path.abspath(commit_group_name)
        fetchStr = "git -C "+commit_group_path+" fetch origin main"
        resetStr = "git -C "+commit_group_path+" reset --hard origin/main"
        # pythonの蛇の行動を決定するファイルが修正されたならpullする
        if ('main.py' in j["head_commit"]["modified"]):
            dt_now = datetime.datetime.now()
            print(dt_now.strftime('%Y/%m/%d %H:%M:%S') + ': ' + commit_group_name + ' modified main.py.')
            subprocess.run(fetchStr,shell=True)
            subprocess.run(resetStr,shell=True)
            log_path = '../../result/chart-log/' 
            commited_file_path = commit_group_path + '/main.py'
            commit_group_num = commit_group_name[-2:]
            dt_now = datetime.datetime.now()
            print(dt_now.strftime('%Y/%m/%d %H:%M:%S') + ': ' + "group" + commit_group_num +" commit")
            snake_port = '80' + commit_group_num
            snake_url = 'http://localhost:' + snake_port
            server_file = commit_group_name + '/server.py'
            #server.pyのportを80+チームNoを使用するように書き換え
            with open(server_file,'r') as f:
                data = f.read()
            data = data.replace('8000',snake_port)
            print("server.py use " + snake_port + " in group" + commit_group_num)
            with open (server_file, 'w') as f:
                f.write(data)
            #蛇プログラム実行
            proc = subprocess.Popen(["python3", commited_file_path],stdout=subprocess.PIPE, stderr=subprocess.PIPE)
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
                print(result.stderr)
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
        

with socketserver.ThreadingTCPServer(("", 8000), MyHandler) as httpd:
    print("deploy server running...")
    httpd.serve_forever()