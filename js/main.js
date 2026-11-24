"use strict";
// Fotos do carrossel (geradas por um laço)
const TOTAL_FOTOS = 15;
const carrosselFotos = document.getElementById("carrossel-fotos");
if (carrosselFotos) {
    for (let i = 1; i <= TOTAL_FOTOS; i++) {
        const item = document.createElement("div");
        item.className = i === 1 ? "carousel-item active" : "carousel-item";
        const img = document.createElement("img");
        img.src = `img/foto${i}.png`;
        img.alt = `Desenho autoral ${i} de ${TOTAL_FOTOS}`;
        img.decoding = "async";
        if (i > 1)
            img.loading = "lazy";
        item.appendChild(img);
        carrosselFotos.appendChild(item);
    }
}
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