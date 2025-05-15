function toggleTheme() {
  const body = document.body;
  const button = document.getElementsByClassName('theme-toggle')[0];
  const current = body.getAttribute('data-theme');

  if (current === 'dark') {
    body.setAttribute('data-theme', 'light');
    button.textContent = 'Tema Escuro';
  } else {
    body.setAttribute('data-theme', 'dark');
    button.textContent = 'Tema Claro';
  }
}

function redirectUrl(cardElement) {
  const url = cardElement.getAttribute('data-url');
  window.open(url, "_blank");
}

function smoothScrollToTop(duration = 600) {
  const start = window.scrollY || window.pageYOffset;
  const startTime = performance.now();

  function scroll() {
    const now = performance.now();
    const elapsed = now - startTime;
    const progress = Math.min(elapsed / duration, 1);
    const ease = 1 - Math.pow(1 - progress, 3);

    window.scrollTo(0, start * (1 - ease));

    if (progress < 1) {
      requestAnimationFrame(scroll);
    }
  }

  requestAnimationFrame(scroll);
}

document.querySelector('.scroll-to-top').addEventListener('click', (e) => {
  e.preventDefault();
  smoothScrollToTop(600);
});