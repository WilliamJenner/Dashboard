import * as React from "react";
import * as ReactDOM from "react-dom";
import "@styles/index.scss";
import App from "./app";
import { BrowserRouter } from "react-router-dom";
let render = () => {
    ReactDOM.render(React.createElement(BrowserRouter, null,
        React.createElement(App, null)), document.getElementById("app"));
};
if (module.hot) {
    const renderApp = render;
    render = () => {
        renderApp();
    };
    module.hot.accept(App, () => {
        setTimeout(render);
    });
}
render();
//# sourceMappingURL=index.js.map