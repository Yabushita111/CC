from http.server import BaseHTTPRequestHandler, HTTPServer
import subprocess
from subprocess import PIPE
import os
import time
import http.client
import re


class MyRequestHandler(BaseHTTPRequestHandler):
    def do_GET(self):
            game_id = "2c197042-7e04-43cb-9e1d-fe4adbda636a"
            # /gameIDの場合
            subprocess.Popen(['vcli',game_id],shell=False)

def run():
    server_address = ('', 8001)
    httpd = HTTPServer(server_address, MyRequestHandler)
    print('Server running...')
    httpd.serve_forever()

if __name__ == '__main__':
    run()