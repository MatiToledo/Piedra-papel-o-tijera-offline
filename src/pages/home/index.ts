import { state } from "../../state";

export function initHome(params) {
  const div = document.createElement("div");
  div.innerHTML = `
  <div class="home">
    <div class="home__text">
      <custom-text variant="title">Piedra Papel o Tijera</custom-text>
    </div>
    <div class="home__button">
      <custom-button>Comenzar</custom-button>
    </div>
    <div class="home__hads">
      <custom-hands></custom-hands>
    </div>
  </div>
  `;

  state.syncState();

  const button = div.querySelector(".home__button");
  button.addEventListener("click", () => {
    params.goTo("/start");
  });

  return div;
}
