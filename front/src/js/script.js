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


// ボタンを押した時の処理
document.getElementById("btn").onclick = function(){
  // 位置情報を取得する
  navigator.geolocation.getCurrentPosition(successCallback, errorCallback);
};

// 取得に失敗した場合の処理
function errorCallback(error){
  alert("位置情報が取得できませんでした");
};

// 取得に成功した場合の処理
function successCallback(position){
  // 緯度を取得し画面に表示
  let latitude = position.coords.latitude;
  document.getElementById("latitude").innerHTML = latitude;
  // 経度を取得し画面に表示
  let longitude = position.coords.longitude;
  document.getElementById("longitude").innerHTML = longitude;
// };


// function mapClick(params) {
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

  // map.setMap(null);

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


  // let last = document.getElementById("map").lastElementChild;
  // console.log(last);
  // last.remove();
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
  // console.log(last);
  last.remove();
}



function buttonClick(){
  var xhr = new XMLHttpRequest();

  xhr.open('POST', 'https://gi3wuc5qt1.execute-api.ap-northeast-1.amazonaws.com/test/');
  xhr.setRequestHeader('content-type', 'application/json;charset=UTF-8');
  // let body = {
  //   "info":{
  //     "name":"郷どり 燦鶏 サンケイ Pedi汐留店",
  //     "address":"東京都港区東新橋１－９－１　東京汐留ビルディング内　Ｐｅｄｉ汐留２Ｆ",
  //     "lat":35.6631030057,
  //     "lng":139.7613604301
  //   }
  // };
  let body = [
    {'station':'東京駅'}
  ];
  xhr.send(body);
  xhr.onreadystatechange = function() {

    if(xhr.readyState === 4 && xhr.status === 200) {
      console.log(xhr.responseText);
    }
  }
}


