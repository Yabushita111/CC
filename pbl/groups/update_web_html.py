#webページを更新
def update_web(group_num,game_id,score,num_game,now_time):
    js_file_path = '../../result/add-page.js'
    not_initial_commit = True
    #jsファイルを読み込み
    with open(js_file_path,'r') as reader:
        lines = reader.readlines()
    for i in range(len(lines)):
        if '// end ranking score' in lines[i]:
            #最新のスコアとゲームidの配列を作成
            latest_line = lines[i-1]
            #最初のコミットの場合はコメントから配列を作成
            if '//' in latest_line:
                not_initial_commit = False
                latest_line = latest_line[6:]
            score_and_gameid = eval(latest_line)
            score_and_gameid[0][0] = 'group' + str(group_num)
            score_and_gameid[1][0] = now_time
            #num_game分該当グループにスコアとgameidを代入
            for j in range(num_game):
                score_and_gameid[0][(group_num-1)*num_game+j+1] = score[j]
                score_and_gameid[1][(group_num-1)*num_game+j+1] = game_id[j]
            #1つ前の配列にカンマの追加，最初のコミットの場合はスキップ
            if not_initial_commit:
                lines_list = list(lines[i-1])
                lines_list.insert(-1,',')
                lines[i-1] = ''.join(lines_list)
            # 新しい配列を挿入
            new_line = '    ' + str(score_and_gameid) + '\n'
            lines.insert(i,new_line)
            break
    with open(js_file_path,'w') as writer:
        writer.writelines(lines)

