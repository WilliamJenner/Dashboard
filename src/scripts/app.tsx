import * as React from "react";
import { Container, Row } from "react-bootstrap";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import { routes, HomeRoute, FourOhFour } from "./routes/index";

const App: React.FC = () => {
  return (
    <React.Fragment>
      <Container>
        <Router>
          <Switch>
            {/* Home page */}
            <Route exact path={routes.root} component={HomeRoute} />
            <Route path={routes.home} component={HomeRoute} />
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
