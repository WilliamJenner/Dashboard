import * as React from "react";
import * as ReactDOM from "react-dom";
import { Hello } from "./components/hello";
import "../styles/index.scss";
const Root = () => (React.createElement(Hello, { name: "Will" }));
let render = () => {
    ReactDOM.render(React.createElement(Root, null), document.getElementById("app"));
};
if (module.hot) {
    const renderApp = render;
    render = () => {
        renderApp();
    };
    module.hot.accept(Hello, () => {
        setTimeout(render);
    });
}
render();
//# sourceMappingURL=index.js.map