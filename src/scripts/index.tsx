import * as React from "react";
import * as ReactDOM from "react-dom";
import "@styles/index.scss";
import App from "./app";
import { BrowserRouter, HashRouter } from "react-router-dom";

let render = (): void => {
  ReactDOM.render(
    <BrowserRouter>
      <App />
    </BrowserRouter>,
    document.getElementById("app")
  );
};

if ((module as any).hot) {
  const renderApp = render;

  render = (): void => {
    renderApp();
  };

  (module as any).hot.accept(App, (): void => {
    setTimeout(render);
  });
}

render();
