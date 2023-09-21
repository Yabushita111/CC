import os
import shutil

battle_log_dir = 'battlelog'
chart_log_dir = 'result/chart-log'
ranking_txt_file = 'pbl/ranking.txt'
add_page_file = 'result/add-page.js'
start_str = '//[["",0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]'
end_str = '// end ranking score'

# delete all battle log
shutil.rmtree(battle_log_dir)
os.mkdir(battle_log_dir)
# delete all chart
shutil.rmtree(chart_log_dir)
os.mkdir(chart_log_dir)
# delete score log in ranking.txt
with open(ranking_txt_file, mode='w') as f :   
    f.write('00/00 00:00:00 0 0 0 0 0 0 0 0 0 0 0 0 0 0')
with open('pbl/groups/ranking.txt', mode='w') as f :   
    f.write('00/00 00:00:00 0 0 0 0 0 0 0 0 0 0 0 0 0 0')
# delete score log and game ID log in add-page.js
with open(add_page_file,'r') as reader:
    lines = reader.readlines()
# find start,end line
start = end = 0
for i in range(len(lines)):
    if start_str in lines[i]:
        start = i
    elif end_str in lines[i]:
        end = i
        break
if start + 1 != end:
    del lines[start+1:end]
with open(add_page_file,'w') as writer:
    writer.writelines(lines)