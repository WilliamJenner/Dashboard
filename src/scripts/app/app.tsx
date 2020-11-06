import * as React from "react";
import { Container, Row } from "react-bootstrap";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import { routes, HomeRoute, FourOhFour } from "./routes/index";
import ConfigContainer from "./state/config";
import { IConfig } from "./types/config";

const App: React.FC = () => {
  const config = ConfigContainer.useContainer();
  const appState: IConfig = JSON.parse(
    document.getElementById("config")?.innerHTML!
  );

  React.useEffect(() => {
    config.setConfig(appState);
  }, []);

  return (
    <React.Fragment>
      <Container bsPrefix={"container-xl"}>
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
