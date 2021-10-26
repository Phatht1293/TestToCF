import { LinkShortener } from "./components/input.js";

const app = document.getElementById("app");

const appscreen = new LinkShortener();

const setscreen = ($container) => {
  app.innerHTML = "";
  app.appendChild($container);
};

setscreen(appscreen.$bgContainer)

export { setscreen };
