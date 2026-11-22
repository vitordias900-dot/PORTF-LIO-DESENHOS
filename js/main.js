"use strict";
// Bolinhas do carrossel (uma por foto)
const indicadores = document.querySelector("#indicadores");
document.querySelectorAll("#carrossel .carousel-item").forEach((_, i) => {
    const botao = document.createElement("button");
    botao.type = "button";
    botao.dataset.bsTarget = "#carrossel";
    botao.dataset.bsSlideTo = String(i);
    botao.setAttribute("aria-label", `Ir para o desenho ${i + 1}`);
    if (i === 0) {
        botao.className = "active";
        botao.setAttribute("aria-current", "true");
    }
    indicadores?.appendChild(botao);
});
// Fecha o menu do celular ao clicar num link
const menu = document.querySelector("#menu");
const toggler = document.querySelector(".navbar-toggler");
document.querySelectorAll("#menu .nav-link").forEach((link) => link.addEventListener("click", () => {
    if (menu?.classList.contains("show"))
        toggler?.click();
}));
// Caixas caindo ao rolar (anima uma vez só)
const observador = new IntersectionObserver((entradas) => entradas.forEach((e) => {
    if (e.isIntersecting) {
        e.target.classList.add("visible");
        observador.unobserve(e.target);
    }
}), { threshold: 0.15 });
document.querySelectorAll(".reveal").forEach((el) => observador.observe(el));
//# sourceMappingURL=main.js.map