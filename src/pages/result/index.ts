import { state } from "../../state";

export function initResult(params) {
  const div = document.createElement("div");

  div.innerHTML = `
  <div class="result">
    <result-poster></result-poster>
    <br>
    <custom-button class="back">Volver a jugar!</custom-button>
  </div>
  `;

  const back = div.querySelector(".back").addEventListener("click", () => {
    params.goTo("/play");
  });

  return div;
}
