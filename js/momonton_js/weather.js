const weather = document.querySelector(".weatherJS");

// OpenWeather API KEY
const api_key = "87fcb1c8245b4ec6d2682142985542fa";

// coords : 좌표 값 읽기
const coords = "coords";

function getWeather(lat, lng) {
  fetch(
    `http://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=${api_key}&units=metric`
  )
    .then(function(response) {
      return response.json();
    })
    .then(function(json) {
      const temperature = json.main.temp;
      const place = json.name;
      weather.innerText = `${temperature} @ ${place}`;
    });
}

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

  getWeather(latitude, longitude);
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
    // 좌표값이 없을 때 실행
    askForCoords();
  } else {
    // 좌표값이 있을 때 실행
    const parsedCoords = JSON.parse(loadedCoords);
    getWeather(parsedCoords.latitude, parsedCoords.longitude);
  }
}

function init() {
  loadCoords();
}

init();
