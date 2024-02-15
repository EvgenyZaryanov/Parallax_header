function parallax(event) {
  let mouseX = event.clientX;
  if (event.type === 'touchmove') {
    mouseX = event.touches[0].clientX;
  }

  this.querySelectorAll('.layer').forEach(layer => {
    let speed = layer.getAttribute('data-speed');
    layer.style.transform = `translateX(${(mouseX * speed) / 1200}px)`;
  });
}
document.addEventListener('mousemove', parallax);
document.addEventListener('touchmove', parallax, { passive: true });
