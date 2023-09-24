# CC
## CCセットアップ
### 前提条件
osはlinux(ubuntu)を想定。\
git,python3,pip3 インストール済み.gitは最新。python3は3.10.6。pip3は22.2.1で確認済み。\
node.js,npm インストール済み。
```
sudo apt install nodejs npm
```
windows上でlinuxたてる場合はwindowsとのポートフォワーディング必要だが仮想マシンの場合は不明。必要なら適宜設定。
### 手順1 git clone
```
cd ~
git clone https://github.com/Yabushita111/CC.git
```
### 手順2 ローカルグループフォルダとgithub上のリモートグループフォルダを連携
※ただし連携先のgithubは[Yabushtia111](https://github.com/Yabushita111)にあるテスト環境pblb2023g01-pblb2023g14
```
cd ~/CC/pbl/groups
python3 git-init.py
```
### 手順4 slack appのトークンを設定ファイルに登録
```
cd ~/CC/pbl/groups
python3 make-env.py
```
### 手順3 必要なpythonパッケージをインストール
`pip3 install -r CC/requirement.txt`
### 手順4 プロセスvcli(jsonをboardに送信する),battlesnake(ゲームを実行する)のpathを通す
以下をbashrcに記述
```
# make path for battlesnake
export PATH=$PATH:/ホームディレクトリ/CC/Battlesnake-rules/cli/battlesnake
export PATH=$PATH:/ホームディレクトリ/CC//Virtual-CLI
```

## 起動方法
rproxyを適切なipアドレスに変更

### cc-replayサーバ起動
nodejsのバージョンがある程度上がるとサーバ起動しない。\
boardフォルダ内でP`export NODE_OPTIONS=--openssl-legacy-provider`実行してから`npm start`するとよい。
```
cd ~/CC/cc-replay
npm start
```
### deployサーバ起動
```
cd ~/CC/pbl/groups
python3 deploy.py
```
### webサーバ起動
```
cd ~/CC/result
python3 server.py
```
## 詰まりそうなところ
ポートフォワーディング\
webhook\
osによってdeploy.pyのsubprocessでshell=TrueをFalseに切り替える必要あり


