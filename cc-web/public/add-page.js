// index.htmlに追加する場所を指定
let start = document.getElementById("start");// ranking.txtに合わせて下が最新
// スコアとそれに対応するgameIDを管理
let solo_score_ranking = [ 
    //[["",0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],['','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','']]
    [['group10', 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, '2', '3', '7', 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], ['10/05 06:06:39 ', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', 'cf0dc942-0a89-43be-978e-151c2bfe3b39', '22df90a7-3551-43ca-b66d-712f1c076739', '81cdb583-1613-4ce6-941d-883d8483f3b3', '', '', '', '', '', '', '', '', '', '', '', '']]
] // end ranking score


colorlist = ["#FF0000", "#0000FF", "#008000", "#808000", "#FFA500", "#FFC0CB", "#800080", 
             "#A52A2A", "#808080", "#f08080", "#000080", "#32CD32", "#FF00FF", "#40E0D0"]

// 1コミットに関するページの処理開始
for(let num_commit =0; num_commit<solo_score_ranking.length; num_commit++){
    // コミットしたチーム名と掲載する画像を指定
    let group_chart_main = document.createElement('main')
    let group_name_h2 = document.createElement('h2');
    let group_name = solo_score_ranking[num_commit][0][0]
    let group_num = Number(group_name.slice(5))-1;
    let group_name_font = document.createElement('font')
    let now_time_h4 = document.createElement('h4')
    let now_time = solo_score_ranking[num_commit][1][0]
    now_time_h4.textContent = now_time
    group_name_font.color = colorlist[group_num];
    group_name_font.textContent = group_name;
    group_name_h2.textContent = " commit";
    group_name_h2.prepend(group_name_font);
    let chart_box = document.createElement('p');
    let chart = document.createElement('img');
    chart.src = 'chart-log/' + solo_score_ranking[num_commit][1][group_num*3+1] + ".png";

    // コミットしたチーム名とチャートを表示
    start.after(group_chart_main)
    if(num_commit == solo_score_ranking.length-1){
        new_h2 = document.createElement('h2')
        new_h2.textContent = "New"
        group_chart_main.appendChild(new_h2)
        new_h2.after(group_name_h2)
    } 
    else group_chart_main.appendChild(group_name_h2)
    group_name_h2.after(now_time_h4)
    now_time_h4.after(chart_box)
    chart_box.appendChild(chart);

    // 表の作成
    let table = document.createElement("table")
    let table_group_tr_before = document.createElement("tr")
    let table_group_tr_after = document.createElement("tr")
    let table_score_tr_before = document.createElement("tr")
    let table_score_tr_after = document.createElement("tr")
    let table_group_th_line_before = document.createElement("th")
    table_group_th_line_before.className = "line"
    let table_group_th_line_after = document.createElement("th")
    table_group_th_line_after.className = "line"
    let table_score_th_after = document.createElement("th")
    table_score_th_after.textContent = "score"
    let table_score_th_before = document.createElement("th")
    table_score_th_before.textContent = "score"

    let table_group_th = new Array(15);
    let table_score_td = new Array(43);
    let table_score_a = new Array(43);
    let table_group_name_div = new Array(15)
    let table_circle_div = new Array(15)

    //group名を管理
    for (let i = 1; i <= 42; i++) {
        if(i<=14){
            table_group_th[i] = document.createElement("th")
            //scoreが3つずつある場合の分割
            table_group_th[i].colSpan = "3"
            table_group_name_div[i] = document.createElement("div")
            table_group_name_div[i].textContent = "group" + String(i)
            table_circle_div[i] = document.createElement("div")
            table_circle_div[i].className = "circle"
            table_circle_div[i].style = "--color: " + colorlist[i-1] + ";"
        }
        table_score_td[i] = document.createElement("td")
        // スコアが存在する場合はリンクを作成
        table_score_td[i].width = "100"
        if (solo_score_ranking[num_commit][1][i] != ''){
            table_score_a[i] = document.createElement("a")
            console.log(location.href)
            table_score_a[i].href =  'replay/?game=' + solo_score_ranking[num_commit][1][i]
            table_score_a[i].target = "_blank"
            table_score_a[i].textContent = String(solo_score_ranking[num_commit][0][i])
            table_score_td[i].appendChild(table_score_a[i])
        }
        else{
            table_score_td[i].textContent = String(solo_score_ranking[num_commit][0][i])
        }
    }

    // 表の表示
    // 前半のチーム名の表示
    chart_box.after(table)
    table.appendChild(table_group_tr_before)
    table_group_tr_before.appendChild(table_group_th_line_before)
    table_group_th_line_before.after(table_group_th[1])
    table_group_th[1].appendChild(table_circle_div[1])
    table_circle_div[1].after(table_group_name_div[1])
    for(let i =2; i <= 7; i++){
        table_group_th[i-1].after(table_group_th[i])
        table_group_th[i].appendChild(table_circle_div[i])
        table_circle_div[i].after(table_group_name_div[i])
    }
    // 前半のスコアの表示
    table_group_tr_before.after(table_score_tr_before)
    table_score_tr_before.appendChild(table_score_th_before)
    table_score_th_before.after(table_score_td[1])
    for(let i =2; i <= 21; i++){
        table_score_td[i-1].after(table_score_td[i])
    }
    // 後半のチーム名の表示
    table_score_tr_before.after(table_group_tr_after)
    table_group_tr_after.appendChild(table_group_th_line_after)
    table_group_th_line_after.after(table_group_th[8])
    table_group_th[8].appendChild(table_circle_div[8])
    table_circle_div[8].after(table_group_name_div[8])
    for(let i =9; i <= 14; i++){
        table_group_th[i-1].after(table_group_th[i])
        table_group_th[i].appendChild(table_circle_div[i])
        table_circle_div[i].after(table_group_name_div[i])
    }
    // 後半のスコアの表示
    table_group_tr_after.after(table_score_tr_after)
    table_score_tr_after.appendChild(table_score_th_after)
    table_score_th_after.after(table_score_td[22])
    for(let i =23; i <= 42; i++){
        table_score_td[i-1].after(table_score_td[i])
    }

}



