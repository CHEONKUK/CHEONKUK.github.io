// OpenWeather API KEY
const api_key = "87fcb1c8245b4ec6d2682142985542fa";

// coords : 좌표 값 읽기
const coords = "coords";

function saveCoords(coordsObj) {
  localStorage.setItem(coords, JSON.stringify(coordsObj));
}

function handleGeoSucces(position) {
  const latitude = position.coords.latitude;
  const longitude = position.coords.longitude;
  const coordsObj = {
    // latitude : latitude ; 처럼 객체 key의 이름을 같게 저장할 때 아래처럼 사용
    latitude,
    longitude
  };
  saveCoords(coordsObj);
}

function handleGeoError() {
  console.log("# Cant access Geo location");
}
function askForCoords() {
  navigator.geolocation.getCurrentPosition(handleGeoSucces, handleGeoError);
}

function loadCoords() {
  const loadedCoords = localStorage.getItem(coords);
  if (loadedCoords === null) {
    askForCoords();
  } else {
    // getWeather
  }
}

function init() {
  loadCoords();
}

init();
