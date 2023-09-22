# CC
## 起動方法
rproxyを適切なipアドレスに変更

- cc-replayサーバ起動\
boardフォルダ内で\
`export NODE_OPTIONS=--openssl-legacy-provider`\
`npm start`
- deployサーバ起動\
`python3 pbl/groups/deploy.py`
- webサーバ起動\
`python3 result/server.py`
## CCセットアップ
### 前提条件
git,python,pip インストール済み\
node.js,npm インストール済み（board起動の際にバージョンは戻すためある程度最新ならok）\
windows上でlinuxたてる場合はwindowsとのポートフォワーディング必要だが仮想マシンの場合は不明。必要なら適宜設定。\
### 手順1 git clone
`cd ~`
`git clone https://github.com/Yabushita111/CC.git`
### 手順2 ローカルグループフォルダとgithub上のリモートグループフォルダを連携
`python3 ~/pbl/groups/git-init.py`
### 手順3 必要なpythonパッケージをインストール
