function parallax(event) {
  this.querySelectorAll('.layer').forEach(layer => {
    let speed = layer.getAttribute('data-speed');
    layer.style.transform = `translateX(${(event.clientX * speed) / 1200}px)`;
  });
}

document.addEventListener('mousemove', parallax);