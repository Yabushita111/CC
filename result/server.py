from http.server import BaseHTTPRequestHandler, HTTPServer
import subprocess
from subprocess import PIPE
import os
import time
import http.client
import re
import webbrowser


class MyRequestHandler(BaseHTTPRequestHandler):
    def do_GET(self):
        #httpは1つのリクエストの１つのソース(html,pdf,・・・)
        if self.path == '/':
            # ルートパスへのGETリクエストが来た場合、index.html を返す
            self.send_response(200)
            self.send_header('Content-type', 'text/html')
            self.end_headers()
            with open('index.html', 'rb') as file:
                self.wfile.write(file.read())
        elif self.path.endswith('.html'):
            self.send_response(200)
            self.send_header('Content-type', 'text/html')
            self.end_headers()
            #self.path[0]を除くと相対パスとして利用可能
            with open(self.path[1:], 'rb') as file:
                self.wfile.write(file.read())
        elif self.path.endswith('.js'):
            self.send_response(200)
            self.send_header('Content-type', 'text/js')
            self.end_headers()
            #self.path[0]を除くと相対パスとして利用可能
            with open(self.path[1:], 'rb') as file:
                self.wfile.write(file.read())
        elif self.path.endswith('.png'):
            png_file_path = self.path[1:]  # Pngファイル名
            if os.path.exists(png_file_path):
                self.send_response(200)
                self.send_header('Content-type', 'application/png')
                self.end_headers()
                with open(png_file_path, 'rb') as png_file:
                    self.wfile.write(png_file.read())
            else:
                self.send_response(404)
                self.send_header('Content-type', 'text/plain')
                self.end_headers()
                self.wfile.write(b'chart Not Found')
        else:
            game_id = self.path[1:]
            game_id_json = '../battlelog/' + game_id + '.json'
            if os.path.exists(game_id_json): #/gameidの場合
                subprocess.run('kill -9 $(lsof -t -i:4000)',shell=True)
                subprocess.Popen(['vcli',game_id])
                replay_url = 'https://tyr.ics.es.osaka-u.ac.jp/cc-replay/?'+game_id
                self.send_response(303)
                self.send_header("Location", replay_url)
                self.end_headers()
            else: #以上のどれにも該当しない
                #gameIDでなく上記のいずれにも該当しないurlの場合404を返す
                self.send_response(404)
                self.send_header('Content-type', 'text/plain')
                self.end_headers()
                self.wfile.write(b'Not Found')

def run():
    server_address = ('', 8080)
    httpd = HTTPServer(server_address, MyRequestHandler)
    print('web server running...')
    httpd.serve_forever()

if __name__ == '__main__':
    run()