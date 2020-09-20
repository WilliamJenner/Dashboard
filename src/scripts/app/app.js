import * as React from "react";
import { Container } from "react-bootstrap";
import { BrowserRouter as Router, Switch, Route, Redirect, } from "react-router-dom";
import { routes, HomeRoute, FourOhFour } from "./routes/index";
const App = () => {
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