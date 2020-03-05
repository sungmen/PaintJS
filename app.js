const canvas = document.getElementById("jsCanvas");
function onMouseMove(event) {
    const x = event.offsetX;
    const y = event.offsetY;
    
}

if(canvas) {
    canvas.addEventListener("mousemove", onMouseMove);
}