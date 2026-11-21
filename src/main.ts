// Gera os indicadores (bolinhas) do carrossel conforme o número de fotos
const carrossel = document.querySelector<HTMLElement>("#carrossel");
const indicadores = document.querySelector<HTMLElement>("#indicadores");

if (carrossel && indicadores) {
  const slides = carrossel.querySelectorAll<HTMLElement>(".carousel-item");

  slides.forEach((_, i) => {
    const botao = document.createElement("button");
    botao.type = "button";
    botao.dataset.bsTarget = "#carrossel";
    botao.dataset.bsSlideTo = String(i);
    botao.setAttribute("aria-label", `Ir para o desenho ${i + 1}`);

    if (i === 0) {
      botao.classList.add("active");
      botao.setAttribute("aria-current", "true");
    }

    indicadores.appendChild(botao);
  });
}

// Fecha o menu mobile ao clicar em um link
const menu = document.querySelector<HTMLElement>("#menu");
const toggler = document.querySelector<HTMLButtonElement>(".navbar-toggler");

document
  .querySelectorAll<HTMLAnchorElement>("#menu .nav-link")
  .forEach((link) => {
    link.addEventListener("click", () => {
      if (menu?.classList.contains("show")) {
        toggler?.click();
      }
    });
  });