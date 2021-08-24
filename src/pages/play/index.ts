import { state } from "../../state";

export function initPlay(params) {
  const div = document.createElement("div");
  div.innerHTML = `
  <div class="play">
    <div class="play__computer">
      <computer-el class="eleccion"></computer-el>
    </div>
    <div class="play__temp">
      <temp-el></temp-el>
    </div>
    <my-play></my-play>
  </div>
  `;

  const computer: any = div.querySelector(".eleccion");
  computer.style.display = "none";

  setInterval(() => {
    computer.style.display = "initial";
  }, 4000);

  setTimeout(() => {
    params.goTo("/result");
  }, 5500);

  return div;
}
