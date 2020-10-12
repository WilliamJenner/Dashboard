import * as React from "react";
import { Container } from "react-bootstrap";
import { BrowserRouter as Router, Switch, Route, Redirect, } from "react-router-dom";
import { routes, HomeRoute, FourOhFour } from "./routes/index";
import ConfigContainer from "./state/config";
const App = () => {
    var _a;
    const config = ConfigContainer.useContainer();
    const appState = JSON.parse((_a = document.getElementById("config")) === null || _a === void 0 ? void 0 : _a.innerHTML);
    React.useEffect(() => {
        config.setConfig(appState);
    }, []);
    console.log({ config });
    return (React.createElement(React.Fragment, null,
        React.createElement(Container, { bsPrefix: "container-xl" },
            React.createElement(Router, null,
                React.createElement(Switch, null,
                    React.createElement(Route, { exact: true, path: routes.root, component: HomeRoute }),
                    React.createElement(Route, { path: routes.home, component: HomeRoute }),
                    React.createElement(Route, { path: routes.fourOhFour, component: FourOhFour }),
                    React.createElement(Redirect, { to: routes.fourOhFour }))))));
};
export default App;
//# sourceMappingURL=app.js.map