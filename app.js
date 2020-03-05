const canvas = document.getElementById("jsCanvas");
const ctx = canvas.getContext("2d");

ctx.strokeStyle = "#2c2c2c";
ctx.lineWidth = 2.5;

canvas.width = 700;
canvas.height = 700;

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
	if(!painting) {
		ctx.beginPath();
		ctx.moveTo(x+92, y+92);
	} else {
		ctx.lineTo(x+92, y+92);
		ctx.stroke();
	}
}

if(canvas) {
	canvas.addEventListener("mousemove", onMouseMove);
	canvas.addEventListener("mousedown", startPainting);
	canvas.addEventListener("mouseup", stopPainting);
	canvas.addEventListener("mouseleave", stopPainting);
}
