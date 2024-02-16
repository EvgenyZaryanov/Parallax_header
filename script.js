function parallax(event) {
  let mouseX = event.clientX;
  let mouseY = event.clientY;

  if (event.type === 'touchmove') {
    mouseX = event.touches[0].clientX;
    mouseY = event.touches[0].clientY;
  }

  this.querySelectorAll('.scene__layer').forEach(layer => {
    let speedX = layer.getAttribute('data-speed-x'); // Скорость по X
    let speedY = layer.getAttribute('data-speed-y'); // Скорость по Y
    layer.style.transform = `translateX(${(mouseX * speedX) / 1200}px) translateY(${
      (mouseY * speedY) / 1200
    }px)`;
  });
}
document.addEventListener('mousemove', parallax);
document.addEventListener('touchmove', parallax, { passive: true });
