function toggleMenu() {
  document.getElementById('navLinks').classList.toggle('show');
}
function drawArcText(canvasId, text, radius, startAngle = -Math.PI/2) {
  const canvas = document.getElementById(canvasId);
  const ctx = canvas.getContext('2d');

  // make sure buffer matches CSS size
  const { width, height } = canvas.getBoundingClientRect();
  canvas.width  = canvas.offsetWidth;
canvas.height = canvas.offsetHeight;
	
  const centerX = width  / 2;
  const centerY = height / 2;
  ctx.font      = "36px Space Grotesk";
  ctx.fillStyle = "#fff";
  ctx.textAlign = "center";
  ctx.textBaseline = "middle";

  // measure total arc length & per-letter angle
  const letters = Array.from(text);
  const arcLen  = letters
    .map(ch => ctx.measureText(ch).width)
    .reduce((a, b) => a + b, 0);
  const anglePerPixel = 2 * Math.PI / (2 * Math.PI * radius);
  let angle = startAngle - (arcLen/2) * anglePerPixel;

  ctx.save();
  ctx.translate(centerX, centerY);

  for (const letter of letters) {
    const w = ctx.measureText(letter).width;
    const halfAng = (w/2) * anglePerPixel;

    ctx.rotate(halfAng);
    ctx.fillText(letter, 0, -radius);
    ctx.rotate(halfAng);

    angle += w * anglePerPixel;
  }

  ctx.restore();
}
window.addEventListener("DOMContentLoaded", () => {
  // your drawArcText() calls here
// Initialize with bubble radii
drawArcText("gallery-text", "Gallery", 110);
drawArcText("process-text", "Process",  85);
drawArcText("about-text",   "About Me", 75);
drawArcText("contact-text", "Contact",   75);
	
	});