'use strict';



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
      document.querySelector('.intro_box').innerHTML = JSON.stringify(resJson);
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
  xhr.setRequestHeader('content-type', 'application/x-www-form-urlencoded;charset=UTF-8');
  xhr.send();
  
  xhr.onreadystatechange = function() {
  
    if(xhr.readyState === 4 && xhr.status === 200) {
      console.log(xhr.responseText);
    }
  }
}