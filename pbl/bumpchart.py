import numpy as np
import matplotlib.pyplot as plt
from scipy.stats import rankdata

def get_ranking(array):
    n = len(array)
    ranks = [-1]*14
    int_array = [int(s) for s in array]
    sorted_array = sorted(int_array,reverse=True)
    for i in range(14):
        for j in range(14):
            if(sorted_array[i]==int_array[j] and ranks[j]==-1):
                ranks[j] = i+1
                break
    return ranks 
def make_chart(commit_group,game_id):
    log_path = '../result/chart-log/'
    time = []
    groups = np.empty((14, 0), dtype=int)
    #group1:赤,group2:青,group3:緑,group4:黄色,group5:オレンジ,group6:ピンク,group7:紫
    #group8:ブラウン,group9:グレー,group10:シアン,group11:ネイビーブルー,group12:ライムグリーン,group13:マゼンタ,group14:ターコイズ
    color_list = ["#FF0000", "#0000FF", "#008000", "#FFFF00", "#FFA500", "#FFC0CB", "#800080", 
                  "#A52A2A", "#808080", "#00FFFF", "#000080", "#32CD32", "#FF00FF", "#40E0D0"]
    with open('ranking.txt','r') as f:
        all_lines = f.readlines()
    lines = all_lines
    #最新10回の対戦結果を画像として出力
    if len(all_lines) > 10:
        lines = all_lines[-10:]
    for line in lines:
        sep_line = line.split()
        time.append(' '.join(sep_line[0:2]))
        group = []
        for i in range(14):
            group.append(sep_line[i+2])
        ranks = get_ranking(group)
        group_rank = np.array(ranks).reshape(14,1)
        groups = np.append(groups,group_rank,axis=1)
    fig, ax = plt.subplots(edgecolor=color_list[commit_group-1],linewidth=3)
    ax.invert_yaxis()
    for i in range(14):
        group_name = "group"+str(i+1)
        ax.plot(time, groups[i],marker='o',color = color_list[i],markersize=11,label=group_name)
    plt.yticks(range(1,15,1))
    plt.xticks(rotation=30,fontsize=6)
    #凡例の位置調整
    plt.legend(ncol=7,loc=(-0.09,1.02),fontsize=7)
    cahrt_name = log_path + game_id + '.png'
    plt.savefig(cahrt_name)
if __name__ == '__main__':
    make_chart(4,"112")
