// # 2.2 Recap! 정리&복습 영상

const canvas = document.getElementById("jsCanvas");
const ctx = canvas.getContext("2d");

canvas.width = 700;
canvas.height = 700;

ctx.strokeStyle = "#2c2c2c";
ctx.lineWidth = 2.5;

let painting = false;

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
    console.log("# Path : " + x, y);
  } else {
    ctx.lineTo(x, y);
    // stroke = 획을 긋는다
    ctx.stroke();
    console.log("# Line : " + x, y);
  }
}

function onMouseDown(event) {
  painting = true;
}

if (canvas) {
  canvas.addEventListener("mousemove", onMouseMove);
  canvas.addEventListener("mousedown", startPainting);
  canvas.addEventListener("mouseup", stopPainting);
  canvas.addEventListener("mouseleave", stopPainting);
}
