import * as React from "react";
import * as ReactDOM from "react-dom";
import { Hello } from "./components/hello";


const Root = (): React.ReactElement => (
    <Hello name={"Will"}></Hello>
);

let render = (): void => {
    ReactDOM.render(<Root />, document.getElementById("app"));
};

if ((module as any).hot) {
    const renderApp = render;

    render = (): void => {
        renderApp();
    };

    (module as any).hot.accept(Hello, (): void => {
        setTimeout(render);
    });
}

render();