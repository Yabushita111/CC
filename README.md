# CC
## CCセットアップ
### 前提条件
osはlinux(ubuntu)を想定。\
git,python3,pip3 インストール済み.gitは最新。python3は3.10.6。pip3は22.2.1で確認済み。\
node.js,npm インストール済み。
```
sudo apt update
sudo apt install python3-pip
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
以下で研究室のpblb2023g01-pblb2023g14に連携
```
cd ~/CC/pbl/groups
python3 kusumoto-git-init.py
```
### 手順4 slack appのトークンを設定ファイルに登録
```
cd ~/CC/pbl/groups
python3 make-env.py
```
### 手順5 必要なpythonパッケージをインストール
`pip3 install -r ~/CC/requirements.txt`
### 手順6 プロセスvcli(jsonをboardに送信する),battlesnake(ゲームを実行する)のpathを通す
以下をbashrcに記述
```
# make path for battlesnake
export PATH=$PATH:/ホームディレクトリ/CC/Battlesnake-rules/cli/battlesnake
export PATH=$PATH:/ホームディレクトリ/CC//Virtual-CLI
```
sourceした後、vcli,battlesnakeを実行しパスが通っているか確かめると良い。
## 起動方法
rproxyを適切なipアドレスに変更\
CC/reset.pyの実行でサーバ初期化(webの記事、図、gameのログ全削除)


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
## つまるところ
privateの最初の実行でdeploy.pyがgit pullする際にユーザ名とパスワードの入力要求するかも\
vcliであるCC/Virutal-CLI/main.go改変する場合は[go](https://virment.com/how-to-install-latest-go-lang-on-linux/)インストール必要
## 課題
#### 開発
- [ ] vcliの改変
- [ ] replテスト
- [ ] duel実装
#### slack
- [ ] 画像とurlを1メッセージでpost
- [ ] 画像だけでなくて"g9 commit"や，どうランクが変動したかなどのメッセージ
- [x] appの名前をcc-botに変更し,アイコンつける
- [x] 画像の縦軸に"rank"とつける
- [ ] 画像の横軸の斜めフォントを縦に変更

#### 初回授業
初夏授業時に簡単な説明．スライド1p,max5m程度．
"藪下です．研究の一環でccというツールを導入します．...もしよろしければ使ってください．"くらいの説明はあるべき．ccの主張はすべき．

#### wepページ
- [x] 図を含めて左寄せにする
- [x] タイトルを"PBLB2023 対戦結果速報"とかに変える．
- [ ] "g1 commit"の下にサブタイトル的にで日付を入れる
- [ ] 画像のグループ一覧は自然な形にする
- [ ] それに合わせて表も2段組にする．可読性のために🔴group1 とかにする．
- [ ] aタグで各commitにタグつける．slackに送るurlもそれに飛べるようにする．(#commit-id)
- [ ] 表の桁はmaxの3桁に合わせる．形が不変な表．
- [ ] tdのカーソルを切る．aタグいれたのでもういらない．
- [ ] helpリンク or how to ある方が良い


