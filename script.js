const menuToggle = document.querySelector('.menu-toggle');
const nav = document.querySelector('nav');
const closeBtn = document.querySelector('.close-btn');

menuToggle.addEventListener('click', () => {
    nav.classList.add('active');
});

closeBtn.addEventListener('click', () => {
    nav.classList.remove('active');
});

document.addEventListener("DOMContentLoaded", function () {
    const descriptions = {
        "Icone HTML": "HTML (HyperText Markup Language) é a 'linguagem' padrão para criação de páginas web.",
        "Icone CSS": "CSS (Cascading Style Sheets) é usado para estilizar elementos HTML e criar layouts responsivos.",
        "Icone JavaScript": "JavaScript é uma linguagem de programação que permite criar scripts em páginas web ou programas.",
        "Icone Python": "Python é uma linguagem de programação versátil e poderosa, amplamente usada em ciência de dados, IA e desenvolvimento web.",
        "Icone PowerBI": "Power BI é uma ferramenta da Microsoft para análise de dados e criação de dashboards interativos.",
        "Icone SQL": "SQL (Structured Query Language) é a linguagem usada para gerenciar e consultar bancos de dados relacionais."
    };

    const descriptionContainer = document.createElement("div");
    descriptionContainer.id = "descriptionCard";
    descriptionContainer.style.border = "1px solid #ccc";
    descriptionContainer.style.padding = "10px";
    descriptionContainer.style.marginTop = "10px";
    descriptionContainer.style.display = "none";
    document.getElementById("habilidades").appendChild(descriptionContainer);

    document.querySelectorAll("#habilidades img").forEach(img => {
        img.addEventListener("click", function () {
            const desc = descriptions[this.alt] || "Descrição não disponível.";
            descriptionContainer.textContent = desc;
            descriptionContainer.style.display = "block";
        });
    });
});

document.addEventListener("DOMContentLoaded", function () {

    document.querySelectorAll("nav ul li a").forEach(anchor => {
        anchor.addEventListener("click", function (e) {
            e.preventDefault();
            const targetId = this.getAttribute("href").substring(1);
            const targetSection = document.getElementById(targetId);

            if (targetSection) {
                const headerHeight = document.querySelector("header").offsetHeight;
                const targetPosition = targetSection.getBoundingClientRect().top + window.scrollY - headerHeight;
                
                smoothScrollTo(targetPosition, 600);
                
                console.log(`Rolando até: ${targetId}`);
            }
        });
    });

    function smoothScrollTo(target, duration) {
        const start = window.scrollY;
        const startTime = performance.now();

        function scrollStep(currentTime) {
            const elapsed = currentTime - startTime;
            const progress = Math.min(elapsed / duration, 1);
            const easeInOutQuad = progress < 0.5
                ? 2 * progress * progress
                : 1 - Math.pow(-2 * progress + 2, 2) / 2;

            window.scrollTo(0, start + (target - start) * easeInOutQuad);

            if (elapsed < duration) {
                requestAnimationFrame(scrollStep);
            }
        }

        requestAnimationFrame(scrollStep);
    }
});