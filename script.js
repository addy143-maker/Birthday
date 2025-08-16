const slider = document.querySelector('.slider');

function activate(e) {
  const items = document.querySelectorAll('.item');
  e.target.matches('.next') && slider.append(items[0]);
  e.target.matches('.prev') && slider.prepend(items[items.length - 1]);
}

document.addEventListener('click', activate, false);

// --- Swipe Support for Mobile ---
let startX = 0;
let endX = 0;

slider.addEventListener("touchstart", (e) => {
  startX = e.touches[0].clientX;
});

slider.addEventListener("touchend", (e) => {
  endX = e.changedTouches[0].clientX;
  handleGesture();
});

function handleGesture() {
  const items = document.querySelectorAll('.item');
  if (endX < startX - 50) {
    // Swipe left → show next
    slider.append(items[0]);
  } else if (endX > startX + 50) {
    // Swipe right → show prev
    slider.prepend(items[items.length - 1]);
  }
}
