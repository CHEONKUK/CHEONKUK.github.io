// # 2.2 Recap! 정리&복습 영상

const canvas = document.getElementById("jsCanvas");
const ctx = canvas.getContext("2d");

const colors = document.getElementsByClassName("jsColor");

const range = document.getElementById("jsRange");

const mode = document.getElementById("jsMode");
const INITTAL_COLOR = "#2c2c2c";
const CANVAS_SIZE = 700;

const saveBtn = document.getElementById("jsSave");

canvas.width = CANVAS_SIZE;
canvas.height = CANVAS_SIZE;

ctx.fillStyle = "white";
// ctx.fillRect( x좌표, y좌표, 가로, 세로);
ctx.fillRect(0, 0, CANVAS_SIZE, CANVAS_SIZE);

ctx.strokeStyle = INITTAL_COLOR;
ctx.lineWidth = 2.5;

ctx.fillStyle = INITTAL_COLOR;

let painting = false;
let filling = false;

function stopPainting() {
  painting = false;
}

function startPainting() {
  painting = true;
}

function onMouseMove(event) {
  const x = event.offsetX;
  const y = event.offsetY;
  // 여기서 모든 움직임을 감지하고 라인을 만들어야 함
  // path 를 만드는 건 기본적으로 line의 시작점을 만드는 것

  if (!painting) {
    // path = line
    ctx.beginPath();
    // path를 만들면 마우스의 xy 좌표로 path를 옮기는 것
    ctx.moveTo(x, y);
    // console.log("# Path : " + x, y);
  } else {
    ctx.lineTo(x, y);
    // stroke = 획을 긋는다
    ctx.stroke();
    // console.log("# Line : " + x, y);
  }
}

function handelColorClick(event) {
  // console.log(event.target.style);
  const color = event.target.style.backgroundColor;
  console.log("# color : " + color);

  // strockeStyle을 override
  ctx.strokeStyle = color;
  ctx.fillStyle = color;
}

function handleRangeCheange(event) {
  // console.log(event.target.value);
  const size = event.target.value;

  // lineWidth을 override
  ctx.lineWidth = size;
}

function handleModeClick() {
  if (filling === true) {
    filling = false;
    mode.innerText = "Fill";
  } else {
    filling = true;
    mode.innerText = "Paint";
  }
}

function handleCanvasClick() {
  if (filling) {
    ctx.fillRect(0, 0, CANVAS_SIZE, CANVAS_SIZE);
  }
}

// 우클릭 방지
function handleContextMenu(event) {
  event.preventDefault();
}

function handleSaveClick() {
  // (기본적으로 PNG로 설정 된)Type parameter에 의해 저장된 포맷의 이미지표현을 포함한 dataURL을 반환
  const img = canvas.toDataURL();
  const link = document.createElement("a");
  link.href = img;
  link.download = "paintJS_Success";
  link.click();
}

if (canvas) {
  canvas.addEventListener("mousemove", onMouseMove);
  canvas.addEventListener("mousedown", startPainting);
  canvas.addEventListener("mouseup", stopPainting);
  canvas.addEventListener("mouseleave", stopPainting);
  canvas.addEventListener("click", handleCanvasClick);
  canvas.addEventListener("contextmenu", handleContextMenu);
}

// Array.from = ovject로 부터 array를 만듬

Array.from(colors).forEach(color =>
  color.addEventListener("click", handelColorClick)
);

if (range) {
  range.addEventListener("input", handleRangeCheange);
}

if (mode) {
  mode.addEventListener("click", handleModeClick);
}

if (saveBtn) {
  saveBtn.addEventListener("click", handleSaveClick);
}
