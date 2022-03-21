import * as React from "react";
import { Container } from "react-bootstrap";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import { routes } from "./routes/index";
import Loadable from "@loadable/component";

const App: React.FC = () => {
  const Home = Loadable(() => import("./routes/HomeRoute"));
  const FourOHFour = Loadable(() => import("./routes/FourOhFourRoute"));
  return (
    <Container bsPrefix={"container-xl"}>
      <Router>
        <Switch>
          {/* Home page */}
          <Route exact path={routes.root} component={Home} />
          <Route path={routes.home} component={Home} />
          {/* 404 */}
          <Route path={routes.fourOhFour} component={FourOHFour} />
          <Redirect to={routes.fourOhFour} />
        </Switch>
      </Router>
    </Container>
  );
};

export default App;
