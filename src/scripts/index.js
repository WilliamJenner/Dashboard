import * as React from "react";
import * as ReactDOM from "react-dom";
import "@styles/index.scss";
import App from "./app/app";
import { BrowserRouter } from "react-router-dom";
let render = () => {
    ReactDOM.render(React.createElement(BrowserRouter, null,
        React.createElement(App, null)), document.getElementById("app"));
};
console.log({ module });
if (module.hot) {
    console.log("is hot");
    module.hot.accept(App, () => {
        console.log("hot reloading");
        setTimeout(render);
    });
}
render();
//# sourceMappingURL=index.js.map