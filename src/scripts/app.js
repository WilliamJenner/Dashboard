import * as React from "react";
import { BrowserRouter as Router, Switch, Route, Redirect, } from "react-router-dom";
import NavigationBar from "./components/layout/NavBar";
import { routes, HomeRoute } from "./routes/index";
import FourOhFour from "./routes/FourOhFourRoute";
const App = () => {
    return (React.createElement(React.Fragment, null,
        React.createElement(NavigationBar, null),
        React.createElement(Router, null,
            React.createElement(Switch, null,
                React.createElement(Route, { exact: true, path: routes.root, component: HomeRoute }),
                React.createElement(Route, { path: routes.home, component: HomeRoute }),
                React.createElement(Route, { path: routes.fourOhFour, component: FourOhFour }),
                React.createElement(Redirect, { to: routes.fourOhFour })))));
};
export default App;
//# sourceMappingURL=app.js.map