import http.server
import socketserver
import subprocess
import datetime
import json
import os
from urllib.parse import parse_qs, urlparse
# 全てのリポジトリへのpushが同じurlにアクセスさせて，通知の中身見てどのリポジトリをpullすれば良いか判断したい
class MyHandler(http.server.BaseHTTPRequestHandler):
    def do_POST(self):
        content_length = int(self.headers['content-length'])
        req_body = self.rfile.read(content_length).decode("utf-8")
        j = json.loads(req_body)
        teamName = j["repository"]["name"]
        print(teamName)
        path = os.path.abspath(teamName)
        fetchStr = "git -C "+path+" fetch origin main"
        resetStr = "git -C "+path+" reset --hard origin/main"
        # main.pyが修正されたならpullする
        if 'main.py' in j["head_commit"]["modified"]:
            subprocess.run(fetchStr,shell=True)
            subprocess.run(resetStr,shell=True)
with socketserver.TCPServer(("", 80), MyHandler) as httpd:
    httpd.serve_forever()