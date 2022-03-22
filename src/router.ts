import { initHome } from "./pages/home";
import { initPlay } from "./pages/play";
import { initResult } from "./pages/result";
import { initStart } from "./pages/start";

const routes = [
  {
    path: /\/home/,
    handler: initHome,
  },
  {
    path: /\/Piedra-papel-o-tijera-offline/,
    handler: initHome,
  },
  {
    path: /\/start/,
    handler: initStart,
  },
  {
    path: /\/play/,
    handler: initPlay,
  },
  {
    path: /\/result/,
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
  if (location.host.includes("github.io")) {
    goTo("/Piedra-papel-o-tijera-offline");
  }
}
