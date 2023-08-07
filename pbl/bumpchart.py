import numpy as np
import matplotlib.pyplot as plt
from scipy.stats import rankdata

def get_ranking(array):
    n = len(array)
    ranks = [-1]*12
    sorted_array = sorted(array,reverse=True)
    #print(sorted_array)
    for i in range(12):
        for j in range(12):
            if(sorted_array[i]==array[j] and ranks[j]==-1):
                ranks[j] = i+1
                break
    return ranks 
def makeChart(commitTeam):
    time = []
    teams = np.empty((12, 0), dtype=int)
    #team1:赤,team2:オレンジ,team3:ピンク,team4:黄緑,team5:緑,team6:水色
    #team7:青,team8:紫,team9:黄色,team10:茶色,team11:黒,team12:オリーブ
    colorlist = ["#FF0000", "#FF7F50", "#FF00FF", "#7FFF00", "#006400", "#00FFFF", 
                 "#0000FF", "#4B0082", "#FFFF00", "#A52A2A", "#000000", "#808000"]
    with open('ranking.txt','r') as f:
        allLines = f.readlines()
    lines = allLines
    #最新10回の対戦結果を画像として出力
    if len(allLines) > 10:
        lines = allLines[-10:]
    for line in lines:
        sep_line = line.split()
        time.append(' '.join(sep_line[0:2]))
        team = []
        for i in range(12):
            team.append(sep_line[i+2])
        #print(team)
        ranks = get_ranking(team)
        #print(ranks)
        team_rank = np.array(ranks).reshape(12,1)
        teams = np.append(teams,team_rank,axis=1)
    #print(teams)
    fig, ax = plt.subplots(edgecolor=colorlist[commitTeam-1],linewidth=3)
    ax.invert_yaxis()
    for i in range(12):
        teamname = "team"+str(i+1)
        ax.plot(time, teams[i],marker='o',color = colorlist[i],markersize=12,label=teamname)
    plt.yticks(range(1,13,1))
    plt.xticks(rotation=30,fontsize=6)
    plt.legend(ncol=6,loc=(-0.05,1.02),fontsize=8)
    plt.savefig("bumpchart.pdf")
