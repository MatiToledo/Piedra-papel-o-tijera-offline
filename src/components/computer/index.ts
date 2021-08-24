import { state } from "../../state";

export function computerComp() {
  customElements.define(
    "computer-el",
    class extends HTMLElement {
      constructor() {
        super();
        this.render();
      }
      render() {
        const shadow = this.attachShadow({ mode: "open" });
        const div = document.createElement("div");
        const style = document.createElement("style");
        style.innerHTML = `
        .tijera, .papel, .piedra{
          transform:rotate(180deg);
          width: 110px;
          height: 252px;
        }
        `;

        const tijeraIMG = require("url:../../images/tijera.png");
        const piedraIMG = require("url:../../images/piedra.png");
        const papelIMG = require("url:../../images/papel.png");

        const eleccion = Math.floor(Math.random() * (4 - 1) + 1);

        if (eleccion == 1) {
          div.innerHTML = `
            <img class="piedra" src=${piedraIMG}>
          `;
          state.setComputerPlay("piedra");
        } else if (eleccion == 2) {
          div.innerHTML = `
          <img class="papel" src=${papelIMG}>
          `;
          state.setComputerPlay("papel");
        } else if (eleccion == 3) {
          div.innerHTML = `
          <img class="tijera" src=${tijeraIMG}>
          `;
          state.setComputerPlay("tijera");
        }

        shadow.appendChild(div);
        shadow.appendChild(style);
      }
    }
  );
}
