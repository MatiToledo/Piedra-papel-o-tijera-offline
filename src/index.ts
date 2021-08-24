import { buttonComp } from "./components/button";
import { computerComp } from "./components/computer";
import { handsComp } from "./components/hands";
import { myPlayComp } from "./components/my-play";
import { resultPosterComp } from "./components/result-poster";
import { TempComp } from "./components/temporizador";
import { TextComp } from "./components/text";
import { initRouter } from "./router";
import { state } from "./state";

(function () {
  state.init();
  const root = document.querySelector(".root");
  initRouter(root);
  TextComp();
  buttonComp();
  handsComp();
  TempComp();
  myPlayComp();
  computerComp();
  resultPosterComp();
})();
