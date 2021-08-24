import { state } from "../../state";

export function resultPosterComp() {
  customElements.define(
    "result-poster",
    class extends HTMLElement {
      constructor() {
        super();
        this.render();
      }
      render() {
        const currentState = state.getState();
        state.whoWins(currentState.myPlay, currentState.computerPlay);

        const shadow = this.attachShadow({ mode: "open" });
        const div = document.createElement("div");
        const style = document.createElement("style");

        div.innerHTML = `
        <div class="${currentState.resultado.toLowerCase()}">
          <custom-text id="text" variant="title">${
            currentState.resultado
          }</custom-text>
        </div>
        <br>
        <div class="container">
          <custom-text variant="subtitle">Score</custom-text>
          <div class="score">
            <custom-text variant="large">Vos: ${
              currentState.history.me
            } </custom-text>
            <custom-text variant="large">Máquina: ${
              currentState.history.machine
            } </custom-text>
          </div>
        </div>
        `;

        style.innerHTML = `
        * {
        box-sizing: border-box;
        } 
        #text{
          color: white;
        }
        .ganaste{
          display: flex;
          align-items: center;
          justify-content: center;
          width: 100%;
          height: 150px;
          border-radius: 10px;
          background-color: rgba(94, 255, 88);
        }
        .perdiste{
          display: flex;
          align-items: center;
          justify-content: center;
          width: 100%;
          height: 150px;
          border-radius: 10px;
          background-color: rgb(255, 80, 79);
        }
        .empate{
          display: flex;
          align-items: center;
          justify-content: center;
          width: 100%;
          height: 150px;
          border-radius: 10px;
          background-color: rgb(255, 233, 95);
        }
        .container{
          background-color: white;
          border: solid 5px;
          padding: 10px;
          border-radius: 10px;
        }
        .score{
          display: flex;
          flex-direction: column;
          align-items: flex-end;
        }
        `;
        shadow.appendChild(div);
        shadow.appendChild(style);
      }
    }
  );
}
