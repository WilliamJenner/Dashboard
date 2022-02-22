import * as React from "react";
import { Container, Row } from "react-bootstrap";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import useEffectOnce from "react-use/lib/useEffectOnce";
import { WallboardInfo } from "./client/client";
import { routes, HomeRoute, FourOhFour } from "./routes/index";
import { AppState } from "./state/appState";

const App: React.FC = () => {
  const { appState, setAppState } = AppState.useContainer();

  useEffectOnce(() => {
    appState.connection &&
      appState.connection!.on("Broadcast", (info: WallboardInfo) => {
        setAppState({ wallboardInfo: info });
      });

    return () => appState.connection?.off("Broadcast");
  });

  return (
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
  );
};

export default App;
