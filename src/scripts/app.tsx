import * as React from "react";
import { Container, Row } from "react-bootstrap";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import NavigationBar from "./components/layout/NavBar";
import { routes, HomeRoute, ShoppingListRoute, FourOhFour } from "./routes/index";

const App: React.FC = () => {
  return (
    <React.Fragment>
      <NavigationBar />
      <Container>
        <Router>
          <Switch>
            {/* Home page */}
            <Route exact path={routes.root} component={HomeRoute} />
            <Route path={routes.home} component={HomeRoute} />
            {/* Shopping List */}
            <Route exact path={routes.shoppingList} component={ShoppingListRoute} />
            {/* 404 */}
            <Route path={routes.fourOhFour} component={FourOhFour} />
            <Redirect to={routes.fourOhFour} />
          </Switch>
        </Router>
      </Container>
    </React.Fragment>
  );
};

export default App;