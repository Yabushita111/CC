import http.server
import socketserver
import subprocess
import json
import os
import datetime
from urllib.parse import parse_qs, urlparse
# 全てのリポジトリへのpushが同じurlにアクセスさせて，通知の中身見てどのリポジトリをpullすれば良いか判断したい
class MyHandler(http.server.BaseHTTPRequestHandler):
    def do_POST(self):
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
            
with socketserver.TCPServer(("", 8000), MyHandler) as httpd:
    httpd.serve_forever()