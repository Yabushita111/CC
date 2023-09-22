# CC
## 起動方法
rproxyを適切なipアドレスに変更

- cc-replayサーバ起動\
boardフォルダ内で\
`export NODE_OPTIONS=--openssl-legacy-provider`\
`npm start`
- deployサーバ起動\
`cd CC/pbl/groups`
`python3 deploy.py`
- webサーバ起動\
`cd CC/result`
`python3 server.py`
## CCセットアップ
### 前提条件
git,python3,pip3 インストール済み.gitは最新。python3は3.10.6。pip3は22.2.1で確認済み。\
node.js,npm インストール済み（board起動の際にバージョンは戻すためある程度最新ならok）\
windows上でlinuxたてる場合はwindowsとのポートフォワーディング必要だが仮想マシンの場合は不明。必要なら適宜設定。
### 手順1 git clone
`cd ~`
`git clone https://github.com/Yabushita111/CC.git`
### 手順2 ローカルグループフォルダとgithub上のリモートグループフォルダを連携
`python3 ~/pbl/groups/git-init.py`
### 手順3 必要なpythonパッケージをインストール
`pip3 install -r CC/requirement.txt`
### 手順4 プロセスvcli(jsonをboardに送信する),battlesnake(ゲームを実行する)のpathを通す
以下をbashrcに記述
`# make path for battlesnake
export PATH=$PATH:/ホームディレクトリ/CC/Battlesnake-rules/cli/battlesnake
export PATH=$PATH:/ホームディレクトリ/CC//Virtual-CLI`


