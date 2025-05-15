AOS.init();

function toggleTheme() {
  const body = document.body;
  const current = body.getAttribute('data-theme');
  body.setAttribute('data-theme', current === 'dark' ? 'light' : 'dark');
}

function redirectUrl(cardElement) {
  const url = cardElement.getAttribute('data-url');
  window.open(url, "_blank");
}

document.addEventListener('DOMContentLoaded', function() {
  const scrollToTopButton = document.querySelector('.scroll-to-top');

  scrollToTopButton.addEventListener('click', function(event) {
    event.preventDefault();
    window.scrollTo({
      top: 0
    });
  });
});