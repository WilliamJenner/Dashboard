import * as React from "react";
import * as ReactDOM from "react-dom";
import "../styles/index.scss";
import App from "./app/app";
import { BrowserRouter } from "react-router-dom";
import { AppState } from "./app/state/config";
let render = () => {
    ReactDOM.render(React.createElement(BrowserRouter, null,
        React.createElement(AppState.Provider, null,
            React.createElement(App, null))), document.getElementById("app"));
};
if (module.hot) {
    module.hot.accept(App, () => {
        setTimeout(() => {
            render();
        });
    });
}
render();
//# sourceMappingURL=index.js.map