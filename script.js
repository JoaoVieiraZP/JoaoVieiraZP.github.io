//Função para mudar o tema da página
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

//Função de redirecionamento da página
function redirectUrl(cardElement) {
  const url = cardElement.getAttribute('data-url');
  window.open(url, "_blank");
}

//Função de abrir página pelo card
function openProject(cardElement) {
  const url = cardElement.getAttribute('data-url');
  window.location.href = url;
}

//Função para a animação suave de subir a página
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

//Função para subir ao topo da página
document.querySelector('.scroll-to-top').addEventListener('click', (e) => {
  e.preventDefault();
  smoothScrollToTop(600);
});

//Animação de PRELOADER para melhorar usabilidade
window.addEventListener("load", () => {
  const preloader = document.getElementById("preloader");
  preloader.classList.add("hide");
});

//Animação no nome principal
const elementos = ["João Vieira", "Desenvolvedor", "Programador Web", "Front-End"];
const target = document.getElementById("typewriter");

let palavraIndex = 0;
let letraIndex = 0;
let deletando = false;

//Função da animação em si
function digitar() {
    const palavraAtual = elementos[palavraIndex];

    if (!deletando) {
        target.textContent = palavraAtual.substring(0, letraIndex + 1);
        letraIndex++;

        if (letraIndex === palavraAtual.length) {
            deletando = true;
            setTimeout(digitar, 2000);
            return;
        }
    } else {
        target.textContent = palavraAtual.substring(0, letraIndex - 1);
        letraIndex--;

        if (letraIndex === 0) {
            deletando = false;
            palavraIndex = (palavraIndex + 1) % elementos.length;
        }
    }
    //Velocidade de apagar/digitar
    setTimeout(digitar, deletando ? 80 : 120);
}

document.addEventListener("DOMContentLoaded", digitar);