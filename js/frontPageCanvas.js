
window.onload = windowSize;
window.onresize = windowSize;
function windowSize() {

  var canvas = document.getElementById("graphic");
  var ctx = canvas.getContext("2d");
  width  = ctx.canvas.width;
  height = ctx.canvas.height;

  ctx.beginPath();
  ctx.rect(20, 20, 150, 100);
  ctx.stroke();
}
