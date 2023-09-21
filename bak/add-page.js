// index.htmlに追加する場所を指定
let start = document.getElementById("start");

// ranking.txtに合わせて下が最新
// スコアとそれに対応するgameIDを管理
let solo_score_ranking = [ 
    //[["",0,0,0,0,0,0,0,0,0,0,0,0,0,0],['','','','','','','','','','','','','','']]
    [['group10', 0, 0, 0, 0, 0, 0, 0, 0, 0, '5', 0, 0, 0, 0], ['', '', '', '', '', '', '', '', '', '7b0d89c4-242f-4460-9a52-e3f328fc19a8', '', '', '', '']],
    [['group9', 0, 0, 0, 0, 0, 0, 0, 0, '26', '5', 0, 0, 0, 0], ['', '', '', '', '', '', '', '', 'c766caba-4187-41c4-8043-d423b91864d1', '7b0d89c4-242f-4460-9a52-e3f328fc19a8', '', '', '', '']],
    [['group13', 0, 0, 0, 0, 0, 0, 0, 0, '26', '5', 0, 0, '13', 0], ['', '', '', '', '', '', '', '', 'c766caba-4187-41c4-8043-d423b91864d1', '7b0d89c4-242f-4460-9a52-e3f328fc19a8', '', '', '5e5121f3-c2ec-4d55-9bdc-2d0f8e59b7f6', '']],
    [['group14', 0, 0, 0, 0, 0, 0, 0, 0, '26', '5', 0, 0, '13', '15'], ['', '', '', '', '', '', '', '', 'c766caba-4187-41c4-8043-d423b91864d1', '7b0d89c4-242f-4460-9a52-e3f328fc19a8', '', '', '5e5121f3-c2ec-4d55-9bdc-2d0f8e59b7f6', '90ee7d2e-c709-4c3b-ae7f-4f313b54a73a']],
    [['group8', 0, 0, 0, 0, 0, 0, 0, '18', '26', '5', 0, 0, '13', '15'], ['', '', '', '', '', '', '', 'bd9ea825-8da8-4c25-a5fa-7ecadb638657', 'c766caba-4187-41c4-8043-d423b91864d1', '7b0d89c4-242f-4460-9a52-e3f328fc19a8', '', '', '5e5121f3-c2ec-4d55-9bdc-2d0f8e59b7f6', '90ee7d2e-c709-4c3b-ae7f-4f313b54a73a']],
    [['group2', 0, '6', 0, 0, 0, 0, 0, '18', '26', '5', 0, 0, '13', '15'], ['', '676d85c5-a24b-48f8-abce-8863144dcdf9', '', '', '', '', '', 'bd9ea825-8da8-4c25-a5fa-7ecadb638657', 'c766caba-4187-41c4-8043-d423b91864d1', '7b0d89c4-242f-4460-9a52-e3f328fc19a8', '', '', '5e5121f3-c2ec-4d55-9bdc-2d0f8e59b7f6', '90ee7d2e-c709-4c3b-ae7f-4f313b54a73a']]
] // end ranking score


colorlist = ["#FF0000", "#0000FF", "#008000", "#FFFF00", "#FFA500", "#FFC0CB", "#800080", "#A52A2A", "#808080", "#00FFFF", "#000080", "#32CD32", "#FF00FF", "#40E0D0"]


// 1コミットに関するページの処理開始
for(let num_commit =0; num_commit<solo_score_ranking.length; num_commit++){
    // コミットしたチーム名と掲載する画像を指定
    let group_chart_main = document.createElement('main')
    let group_name_h2 = document.createElement('h2');
    let group_name = solo_score_ranking[num_commit][0][0]
    let group_num = Number(group_name.slice(5))-1; //グループNo -1 が格納
    let group_name_font = document.createElement('font')
    group_name_font.color = colorlist[group_num];
    group_name_font.textContent = group_name;
    group_name_h2.textContent = " commited";
    group_name_h2.prepend(group_name_font);
    let chart_box = document.createElement('p');
    chart_box.style = "text-align:center";
    let chart = document.createElement('img');
    chart.src = 'chart-log/' + solo_score_ranking[num_commit][1][group_num] + ".png";

    // コミットしたチーム名とチャートを表示
    start.after(group_chart_main);
    group_chart_main.appendChild(group_name_h2);
    group_name_h2.after(chart_box)
    chart_box.appendChild(chart);

    // 表の作成
    let table = document.createElement("table")
    table.align = "center"
    let table_group_tr = document.createElement("tr")
    let table_score_tr = document.createElement("tr")
    let table_group_th_line = document.createElement("th")
    table_group_th_line.class = "line"
    let table_score_th = document.createElement("th")
    table_score_th.textContent = "score"

    let table_group_th = new Array(15);
    let table_score_td = new Array(15);
    let table_score_a = new Array(15);

    //group名を管理
    for (let i = 1; i <= 14; i++) {
        table_group_th[i] = document.createElement("th")
        //スコアが3つずつある場合の分割
        //table_group_th[i].colSpan = "3"
        table_score_td[i] = document.createElement("td")
        // スコアが存在する場合はリンクを作成
        if (solo_score_ranking[num_commit][1][i-1] != ''){
            table_score_a[i] = document.createElement("a")
            table_score_a[i].href = "https://tyr.ics.es.osaka-u.ac.jp/cc/" + solo_score_ranking[num_commit][1][i-1]
            table_score_a[i].target = "_blank"
            table_score_a[i].textContent = String(solo_score_ranking[num_commit][0][i])
            table_score_td[i].appendChild(table_score_a[i])
        }
        else{
            table_score_td[i].textContent = String(solo_score_ranking[num_commit][0][i])
        }
        table_group_th[i].textContent = "group" + String(i)
    }

    // 表の表示
    // チーム名の表示
    chart_box.after(table)
    table.appendChild(table_group_tr)
    table_group_tr.appendChild(table_group_th_line)
    table_group_th_line.after(table_group_th[1])
    for(let i =2; i <= 14; i++){
        table_group_th[i-1].after(table_group_th[i])
    }
    // スコアの表示
    table_group_tr.after(table_score_tr)
    table_score_tr.appendChild(table_score_th)
    table_score_th.after(table_score_td[1])
    for(let i =2; i <= 14; i++){
        table_score_td[i-1].after(table_score_td[i])
    }
}



