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
function successCallback(position, flag, lat, lng){
  let latitude, longitude;
  if(flag == null){
    // 緯度を取得し画面に表示
    latitude = position.coords.latitude;
    document.getElementById("latitude").innerHTML = latitude;
    // 経度を取得し画面に表示
    longitude = position.coords.longitude;
    document.getElementById("longitude").innerHTML = longitude;
  }

  else{
    // 緯度を取得し画面に表示
    latitude = lat;
    // 経度を取得し画面に表示
    longitude = lng;
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
  // console.log(last);
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
      successCallback(this,true, parseFloat(ary.lat), parseFloat(ary.lng));
      document.querySelector('.loca_name_insert').innerHTML = ary.name;
      document.querySelector('.loca_address_insert').innerHTML = ary.address;
    }
  }
}


