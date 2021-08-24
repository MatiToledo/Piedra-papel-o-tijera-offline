export function initStart(params) {
  const div = document.createElement("div");
  div.innerHTML = `
  <div class="start">
    <custom-text variant="large">Presioná jugar
    y elegí: piedra, papel o tijera antes de que pasen los 3 segundos.</custom-text>
    <div class="start__button">
      <custom-button>¡Jugar!</custom-button>
    </div>
    <custom-hands></custom-hands>
  </div>
  `;

  const button = div
    .querySelector(".start__button")
    .addEventListener("click", () => {
      params.goTo("/play");
    });

  return div;
}
