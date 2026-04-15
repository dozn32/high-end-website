// SCROLL ANIMATION
const reveals = document.querySelectorAll('.reveal');

window.addEventListener('scroll', () => {
  reveals.forEach(el => {
    const top = el.getBoundingClientRect().top;
    if (top < window.innerHeight - 100) {
      el.classList.add('active');
    }
  });
});

// DARK MODE
const btn = document.getElementById('toggle');

if (localStorage.getItem('theme') === 'light') {
  document.body.classList.add('light');
  btn.textContent = '☀️';
}

btn.onclick = () => {
  document.body.classList.toggle('light');

  const mode = document.body.classList.contains('light') ? 'light' : 'dark';
  localStorage.setItem('theme', mode);

  btn.textContent = mode === 'light' ? '☀️' : '🌙';
};
// AUTO SCALE KHI EMBED
function fixScale() {
  const width = window.innerWidth;

  if (width < 900) {
    document.body.style.zoom = "0.9";
  } else {
    document.body.style.zoom = "1";
  }
}

window.addEventListener("resize", fixScale);
fixScale();
