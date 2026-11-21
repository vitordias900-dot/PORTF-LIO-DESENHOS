"use strict";
const indicadores = document.getElementById("indicadores");
const slides = document.querySelectorAll(".carousel-item");
if (indicadores) {
    slides.forEach((_, i) => {
        const botao = document.createElement("button");
        botao.type = "button";
        botao.setAttribute("data-bs-target", "#carrossel");
        botao.setAttribute("data-bs-slide-to", String(i));
        botao.setAttribute("aria-label", `Foto ${i + 1}`);
        if (i === 0) {
            botao.classList.add("active");
            botao.setAttribute("aria-current", "true");
        }
        indicadores.appendChild(botao);
    });
}
