$("#btn1").on("click", function () {
    let date = new Date();
    let year = date.getFullYear();
    let month = date.getMonth() + 1;
    let day = date.getDate();
    let message = `今日は${year}年${month}月${day}日です`
    // jQueryを使って画面にメッセージを表示する
    $("#tBox").val(message);
    const URL = "http://webservice.recruit.co.jp/hotpepper/gourmet/v1/?key=" + "28a7dae3df080074" + "&lat=34.67&lng=135.52&range=5&order=4"
    const res = fetch(URL);
    const data = res.text();
    var json = parser.toJson(data);
    const obj = JSON.parse(json)
    message=""
    message+='xmlns:' + obj.results.xmlns+"\n";
    message+='店舗名:' + obj.results.shop[0].name;
    message+='住所:' + obj.results.shop[0].address;
    // jQueryを使って画面にメッセージを表示する
    $("#tBox").val(message);
});