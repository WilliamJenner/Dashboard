import * as React from "react";
import { Container } from "react-bootstrap";
import { BrowserRouter as Router, Switch, Route, Redirect, } from "react-router-dom";
import NavigationBar from "./components/layout/NavBar";
import { routes, HomeRoute, ShoppingListRoute, FourOhFour } from "./routes/index";
const App = () => {
    return (React.createElement(React.Fragment, null,
        React.createElement(NavigationBar, null),
        React.createElement(Container, null,
            React.createElement(Router, null,
                React.createElement(Switch, null,
                    React.createElement(Route, { exact: true, path: routes.root, component: HomeRoute }),
                    React.createElement(Route, { path: routes.home, component: HomeRoute }),
                    React.createElement(Route, { exact: true, path: routes.shoppingList, component: ShoppingListRoute }),
                    React.createElement(Route, { path: routes.fourOhFour, component: FourOhFour }),
                    React.createElement(Redirect, { to: routes.fourOhFour }))))));
};
export default App;
//# sourceMappingURL=app.js.map