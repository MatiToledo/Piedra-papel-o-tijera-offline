type jugada = "piedra" | "papel" | "tijera";

const state = {
  data: {
    myPlay: "",
    computerPlay: "",
    resultado: "",
    history: {
      me: 0,
      machine: 0,
    },
  },
  listeners: [],
  init() {
    const localData = localStorage.getItem("saved-state");
    this.setState(JSON.parse(localData));
  },
  getState() {
    return this.data;
  },
  setState(newState) {
    this.data = newState;
    for (const cb of this.listeners) {
      cb(newState);
    }
    console.log("state actual", newState);

    localStorage.setItem("saved-state", JSON.stringify(newState));
  },
  subscribe(callback: (any) => any) {
    this.listeners.push(callback);
  },
  setMyPLay(move: jugada) {
    const currentState = this.getState();
    currentState.myPlay = move;
  },
  setComputerPlay(move: jugada) {
    const currentState = this.getState();
    currentState.computerPlay = move;
  },
  whoWins(my: jugada, computer) {
    const currentState = state.getState();

    if (
      (my === "papel" && computer === "piedra") ||
      (my === "tijera" && computer === "papel") ||
      (my === "piedra" && computer === "tijera")
    ) {
      currentState.history.me++;
      currentState.resultado = "Ganaste";
    } else if (
      (my === "papel" && computer === "tijera") ||
      (my === "tijera" && computer === "piedra") ||
      (my === "piedra" && computer === "papel")
    ) {
      currentState.history.machine++;
      currentState.resultado = "Perdiste";
    } else {
      currentState.resultado = "Empate";
    }
    this.setState(currentState);
  },
};

export { state };
