import { initHome } from "./pages/home";
import { initPlay } from "./pages/play";
import { initResult } from "./pages/result";
import { initStart } from "./pages/start";

const routes = [
  {
    path: /\/desafio-m5\/home/,
    handler: initHome,
  },
  {
    path: /\/desafio-m5\/start/,
    handler: initStart,
  },
  {
    path: /\/desafio-m5\/play/,
    handler: initPlay,
  },
  {
    path: /\/desafio-m5\/result/,
    handler: initResult,
  },
];

export function initRouter(container: Element) {
  function goTo(path) {
    history.pushState({}, "", path);
    handleRoute(path);
  }
  function handleRoute(route) {
    for (const r of routes) {
      if (r.path.test(route)) {
        const el = r.handler({ goTo: goTo });

        container.firstChild?.remove();
        container.appendChild(el);
      }
    }
  }
  if (location.pathname == "/") {
    goTo("/home");
  } else {
    handleRoute(location.pathname);
  }
  window.onpopstate = function () {
    handleRoute(location.pathname);
  };
}
