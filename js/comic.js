/* Title JS */
let title = document.title;
window.addEventListener("blur", () => {
    document.title = "TexnoParka geri dön!";
});
window.addEventListener("focus", () => {
    document.title = title;
});




const canvas = document.getElementById('myCanvas');
const ctx = canvas.getContext('2d');
let x = 100;
let y = 100;
let dx = 5;
let dy = 5;

function drawCircle() {
  ctx.beginPath();
  ctx.arc(x, y, 30, 0, Math.PI * 2);
  ctx.fillStyle = '#0095DD';
  ctx.fill();
  ctx.closePath();
}

function animate() {
  requestAnimationFrame(animate);
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  drawCircle();
  x += dx;
  y += dy;
  if (x + dx > canvas.width - 30 || x + dx < 30) {
    dx = -dx;
  }
  if (y + dy > canvas.height - 30 || y + dy < 30) {
    dy = -dy;
  }
}

animate();
