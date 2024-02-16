function parallax(event) {
  let mouseX = event.clientX;
  let mouseY = event.clientY;

  if (event.type === 'touchmove') {
    mouseX = event.touches[0].clientX;
    mouseY = event.touches[0].clientY;
  }

  this.querySelectorAll('.scene__layer').forEach(layer => {
    let speedX = layer.getAttribute('data-speed-x');
    let speedY = layer.getAttribute('data-speed-y');
    layer.style.transform = `translateX(${(mouseX * speedX) / 1200}px) translateY(${
      (mouseY * speedY) / 1200
    }px)`;
  });
}
document.addEventListener('mousemove', parallax);
document.addEventListener('touchmove', parallax, { passive: true });

let thresholdSets = [];
for (let i = 0; i <= 1.0; i += 0.005) {
  thresholdSets.push(i);
}

const callback = function (entries, observer) {
  const scrollTopPercent = (window.clientYOffset / parallax.offsetHeight) * 100;
  setParallaxItemsStyle(scrollTopPercent);
};
const observer = new interSectionObserver(callback, { threshold: thresholdSets });
observer.observe(document.querySelector('content'));

function setParallaxItemsStyle(scrollTopPercent) {
  layer.style.transform = `transform: translate(0%, -${scrollTopPercent / 9}%);`;
}
