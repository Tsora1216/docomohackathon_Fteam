'use strict';



function initMap() {
  let map;
  let marker;
  let infoWindow;
  let center = {
    lat: 34.7019399, // 緯度
    lng: 135.51002519999997 // 経度
  };

  map = new google.maps.Map(document.getElementById('map'), {
     center: center, // 地図の中心を指定
     zoom: 19 // 地図のズームを指定
  });

  marker = new google.maps.Marker({ // マーカーの追加
      position: center, // マーカーを立てる位置を指定
      map: map // マーカーを立てる地図を指定
  });

  infoWindow = new google.maps.InfoWindow({ // 吹き出しの追加
    content: '<div class="sample">TAM 大阪</div>' // 吹き出しに表示する内容
  });

  marker.addListener('click', function() { // マーカーをクリックしたとき
    infoWindow.open(map, marker); // 吹き出しの表示
  });
}


let curr_loca = false;
// ボタンを押した時の処理
document.getElementById("btn").onclick = function(){
  // 位置情報を取得する
  // navigator.geolocation.getCurrentPosition(successCallback, errorCallback);
  successCallback(this,true, parseFloat(35.681236), parseFloat(139.767125));
  document.querySelector('.loca_name_insert').innerHTML = '東京駅';
  document.querySelector('.loca_address_insert').innerHTML = '東京都千代田区丸の内１丁目';
  curr_loca = true;
};

// 取得に失敗した場合の処理
function errorCallback(error){
  alert("位置情報が取得できませんでした");
};

// 取得に成功した場合の処理
function successCallback(position, flag, lat, lng){
  let latitude, longitude;
  if(flag == null && curr_loca == false){
    // 緯度を取得し画面に表示
    latitude = position.coords.latitude;
    document.getElementById("latitude").innerHTML = latitude;
    // 経度を取得し画面に表示
    longitude = position.coords.longitude;
    document.getElementById("longitude").innerHTML = longitude;
  }

  else{
    // 緯度を取得し画面に表示
    latitude = parseFloat(lat);
    // 経度を取得し画面に表示
    longitude = parseFloat(lng);
  }

  let map;
  let marker;
  let infoWindow;
  let center = {
    lat: latitude, // 緯度
    lng: longitude // 経度
  };

  map = new google.maps.Map(document.getElementById('map'), {
    center: center, // 地図の中心を指定
    zoom: 19 // 地図のズームを指定
  });

  marker = new google.maps.Marker({ // マーカーの追加
      position: center, // マーカーを立てる位置を指定
      map: map // マーカーを立てる地図を指定
  });

  infoWindow = new google.maps.InfoWindow({ // 吹き出しの追加
    content: '<div class="sample">TAM 大阪</div>' // 吹き出しに表示する内容
  });

  marker.addListener('click', function() { // マーカーをクリックしたとき
    infoWindow.open(map, marker); // 吹き出しの表示
  });
}


fetch('https://gi3wuc5qt1.execute-api.ap-northeast-1.amazonaws.com/test/', {
  method: "POST",
  mode: 'cors'
})
.then((response) => {
  if (response.ok) {
    return response.json().then(resJson => {
      console.log(JSON.stringify(resJson));
      // document.querySelector('.intro_box').innerHTML = JSON.stringify(resJson);
    });
  }
  throw new Error('Network response was not ok.');
})
.catch(error => {
  console.error(error);
})




// dom 要素が読み込まれてから
window.onload = function() {
  let last = document.getElementById("map").lastElementChild;
  last.remove();
}

let unicodeUnescape = function(str) {
	let result = '', strs = str.match(/\\u.{4}/ig);

	if (!strs) return '';

	for (let i = 0, len = strs.length; i < len; i++) {
		result += String.fromCharCode(strs[i].replace('\\u', '0x'));
	}

	return result;
};

function buttonClick(){
  let input_me = document.querySelector('#loca').value;
  let input_partner = document.querySelector('#p_loca').value;

  let xhr = new XMLHttpRequest();

  xhr.open('POST', 'https://gi3wuc5qt1.execute-api.ap-northeast-1.amazonaws.com/test/');
  xhr.setRequestHeader('content-type', 'application/json;charset=UTF-8');

  let body = {'station': input_me};
  body = JSON.stringify(body);
  xhr.send(body);

  xhr.onreadystatechange = function() {
    if(xhr.readyState === 4 && xhr.status === 200) {
      let ary = JSON.parse(xhr.responseText).body.info;
      let ary2 = JSON.parse(xhr.responseText).body.info2;

      successCallback(this,true, parseFloat(ary.lat), parseFloat(ary.lng));
      document.querySelector('.loca_name_insert').innerHTML = ary.name;
      document.querySelector('.loca_address_insert').innerHTML = ary.address;
      document.querySelector('.loca_name_insert2').innerHTML = ary2.name;
      document.querySelector('.loca_address_insert2').innerHTML = ary2.address;

      let eles = document.querySelectorAll('.cil');
      let pink;
      eles.forEach(e => {
        if(e.classList.contains('pink') == true){
          pink = e.getAttribute('id');
        }
      });
      console.log(pink);

    }
  }
}













document.addEventListener("DOMContentLoaded", function(){
  //要素の表示、円周上に表示させる
  let num = ["A","B"]//,6,7,8,9];
  //HTMLに表示
  let roulette = document.getElementById("roulette");
  /*円形に並べる*/
  let item_length = num.length;
  //rouletteの半径を計算
  let r = roulette.clientWidth/2;
  //360度÷配置要素数
  let deg = 360.0/item_length;
  //さっきの角度をラジアンに変更
  let rad = (deg*Math.PI/180.0);
  
  //要素追加して表示させる
  for(var i = 0; i < num.length; i++ ){
      //div要素の追加
      let div = document.createElement('div');
      div.className = "cil";
      div.id = "cil"+ i;
      div.innerHTML= num[i] ;
      const x = Math.cos(rad * i) * r + r;
      const y = Math.sin(rad * i) * r + r;
      let circle = roulette.appendChild(div);
      circle.style.left = x + "px";
      circle.style.top = y + "px";
      // console.log(x);
  }    
  //ルーレットする
  let interval;//インターバル
  let first = false;//フラグ
  let number = "1";
  let grid =0; 
  function start_set(){//start状態
      document.getElementById("start").disabled = true;
      document.getElementById("stop").disabled = false;
      document.getElementById("reset").disabled = false;
      if(first === false){
          interval = setInterval(start_go,100);
          first = true;
      }
  }
  function start_go(){//start押下
    let div_number
      for(var k = 0; k < item_length; k++){
          div_number = document.getElementById('cil'+[k]);//表示上のidの取得
          div_number.classList.remove('red');//.redを消す
      }
      grid = Math.floor(Math.random()*num.length);
      number = grid;//.redをつけるためのランダムな数字を選択
      div_number = document.getElementById('cil'+ number);
      //console.log(div_number);
      div_number.classList.add('red');
  }
  function stop_set(){//stop押下
      document.getElementById("stop").disabled = true;
      document.getElementById("start").disabled = false;
      clearInterval(interval);
      first = false;
      let red_number = document.querySelector('.red');//.redクラスのついているものを取得
      //console.log(grid);  
      num.splice(grid,1);//配列からred_numberのところを1つ削除     
      //console.log(num);    
      red_number.classList.remove('red');
      red_number.classList.add("pink");
      if(num.length === 0){
      document.getElementById("start").disabled = true;
      }
  }
  function reset_set(){//リセット押下
      clearInterval(interval);
      first = false;
      document.getElementById("start").disabled = false;
      for(var j = 0; j < 10 ; j++){
          let all = document.getElementById("cil" + j);
          all.classList.remove('pink');
          all.classList.remove('red');
      }
      num = [0,1,2,3,4,5]//,6,7,8,9];
  }
      const starter = document.getElementById("start");
      const stopper = document.getElementById("stop");
      const resetter = document.getElementById("reset");
      starter.addEventListener("click",start_set,false);
      stopper.addEventListener("click",stop_set,false);
      resetter.addEventListener("click",reset_set,false);
      document.getElementById("stop").disabled = true;
      document.getElementById("reset").disabled = true;
  });
