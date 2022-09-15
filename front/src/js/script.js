'use strict';
// ボタンを押した時の処理
document.getElementById("btn").onclick = function(){
  // 位置情報を取得する
  navigator.geolocation.getCurrentPosition(successCallback, errorCallback);
};

// 取得に成功した場合の処理
function successCallback(position){
  // 緯度を取得し画面に表示
  var latitude = position.coords.latitude;
  document.getElementById("latitude").innerHTML = latitude;
  // 経度を取得し画面に表示
  var longitude = position.coords.longitude;
  document.getElementById("longitude").innerHTML = longitude;
};

// 取得に失敗した場合の処理
function errorCallback(error){
  alert("位置情報が取得できませんでした");
};


var map;
var marker;
var center = {
  lat: 34.7019399, // 緯度
  lng: 135.51002519999997 // 経度
};
function initMap() {
  map = new google.maps.Map(document.getElementById('map'), {
     center: center, // 地図の中心を指定
     zoom: 19 // 地図のズームを指定
  });

  marker = new google.maps.Marker({ // マーカーの追加
      position: center, // マーカーを立てる位置を指定
      map: map // マーカーを立てる地図を指定
  });
}


fetch('https://gi3wuc5qt1.execute-api.ap-northeast-1.amazonaws.com/test/', {
  method: "GET",
  mode: 'cors'
})
.then((response) => {
  if (response.ok) {
    return response.json().then(resJson => {
      console.log(JSON.stringify(resJson));
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
