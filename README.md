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
git,python3 インストール済み
