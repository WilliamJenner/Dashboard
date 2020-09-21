import * as React from "react";
import * as ReactDOM from "react-dom";
import "@styles/index.scss";
import App from "./app/app";
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
  console.log("is hot");

  (module as any).hot.accept(App, (): void => {
    console.log("hot reloading");
    setTimeout(() => {
      render();
    });
  });
}

render();
