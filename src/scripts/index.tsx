import * as React from "react";
import * as ReactDOM from "react-dom";
import "../styles/index.scss";
import App from "./app/app";
import { BrowserRouter, HashRouter } from "react-router-dom";
import { AppState } from "./app/state/appState";

let render = (): void => {
  ReactDOM.render(
    <BrowserRouter>
      <AppState.Provider>
        <App />
      </AppState.Provider>
    </BrowserRouter>,
    document.getElementById("app")
  );
};

if ((module as any).hot) {
  (module as any).hot.accept(App, (): void => {
    setTimeout(() => {
      render();
    });
  });
}

render();
