const menuToggle = document.querySelector('.menu-toggle');
const nav = document.querySelector('nav');
const closeBtn = document.querySelector('.close-btn');

menuToggle.addEventListener('click', () => {
    nav.classList.add('active');
});

closeBtn.addEventListener('click', () => {
    nav.classList.remove('active');
});