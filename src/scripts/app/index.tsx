import * as React from "react";
import "../../styles/index.scss";
import App from "./app/app";
import { BrowserRouter } from "react-router-dom";
import { createRoot } from "react-dom/client";
import { AppState } from "./app/state/appState";

const container = document.getElementById("root");
const root = createRoot(container);
const Root = (): React.ReactElement => (
  <BrowserRouter>
    <AppState.Provider>
      <App />
    </AppState.Provider>
  </BrowserRouter>
);

root.render(<Root />);
