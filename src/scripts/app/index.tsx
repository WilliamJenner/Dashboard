import * as React from "react";
import "../../styles/index.scss";
import App from "./app/app";
import { createRoot } from "react-dom/client";
import { AppState } from "./app/state/appState";

const container = document.getElementById("root");
const root = createRoot(container);
const Root = (): React.ReactElement => (
  <AppState.Provider>
    <App />
  </AppState.Provider>
);

root.render(<Root />);
