const body = document.querySelector("body");

const img_number = 4;

function paintImg(imgNumber) {
  const img = new Image();
  img.src = `../img/${imgNumber + 1}.jpg`;
  img.classList.add("backGroundImg");
  body.appendChild(img);
}

function genRandom() {
  const number = Math.floor(Math.random() * img_number);
  return number;
}

function init() {
  const randomNumber = genRandom();
  paintImg(randomNumber);
}

init();
