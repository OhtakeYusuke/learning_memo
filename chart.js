・ 基本
    ・描画エリアの作成
        <canvas id=""></canvas>
        （例）<canvas id="myChart"></canvas>

    ・Chartの設定
        const 取得描画エリア名 = document.getElementById("")
        const グラフ名 = new Chart(取得描画エリア名, {
          type: グラフタイプ,
          data: データ,
          options: オプション
        })

    ・type
        line            折れ線グラフ
        bar             縦棒グラフ
        horizontalBar   横棒グラフ
        pie             円グラフ

    ・options
        # タイトルに関するオプション
        title:{
          # タイトルを表示するかのオプション
          display: true
          # タイトルの名前
          text: "foo"
        }

        # 軸に関するオプション
        scales:{
          Y軸に関する変更
          yAxes: [{
            # 軸の”目盛り”に関してのオプション
            # ticks: {
              # 最大値の値
              suggestedMax: 40,
              # 最小値の値
              suggestedMin: 0,
              # １目盛りの大きさ
              stepSize: 10,
              # 軸のラベルに関係
              callback: function(value, index, values){
                return value + "度"
              }
            }
          }]
        }

        data: {
          # データのそれぞれのラベルに関するオプション(軸のそれぞれのメモリ上に出現)
          labels: ['8月1日', '8月2日', '8月3日', '8月4日', '8月5日', '8月6日', '8月7日']
          datasets:[
            { 
              グラフ上部に現れるそれぞれの線がなにを表現しているのかのオプション
              label: '最高気温(度）',
              それぞれの値
              data: [35, 34, 37, 35, 34, 35, 34, 25],
              線の色
              borderColor: "rgba(255,0,0,1)"
              背景色,
              backgroundColor: "rgba(0,0,0,0)"
            },
          ]
        }


・ 折れ線
・ 縦棒グラフ
・ 横棒グラフ horizontalBar
・ レスポンシブ対応
    ・Chart.jsの<canvas>サイズのアスペクト比ルール
        ・アスペクト比 横：縦＝２：１
        ・横サイズは親要素のサイズに準ずる
        ・縦サイズは横の半分
        ・<canvas>要素内で記述したwidth height はピクセル指定ではなく、「比率」

    ・レスポンシブ対応できるように変更
        ・固定のアスペクト比を解除
            optionにmaintainRatio:falseを追加
            シァシこの状態だとまだ縦のサイズが150pxに固定されているので変更

        ・縦のサイズを指定する
            <canvas>を<div>要素で囲んでしまい、スタイルシートに書き込む
            このときwidthとheightを％で指定するには基準となる長さが必要なのでさらに<div>で囲む





・ 
・ 
・ 
・ 
・ 
・ 
・ 
・ 
・ 
・ 
・ 
・ 
・ 
・ 
・ 
・ 
・ 
・ 
・ 
・ 
・ 
・ 
・ 
