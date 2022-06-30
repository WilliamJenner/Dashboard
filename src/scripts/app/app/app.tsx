import * as React from "react";
import { Container, Spinner } from "react-bootstrap";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import { routes } from "./routes/index";

const App: React.FC = () => {
  const Home = React.lazy(
    () => import(/* webpackChunkName: "home-route" */ "./routes/HomeRoute")
  );
  const FourOHFour = React.lazy(
    () =>
      import(/* webpackChunkName: "four-oh-four" */ "./routes/FourOhFourRoute")
  );
  return (
    <Container bsPrefix={"container-xl"} className="flex flex-col">
      <React.Suspense
        fallback={
          <div className="flex justify-center">
            <Spinner animation="border" />
          </div>
        }
      >
        <Router>
          <Switch>
            {/* Home page */}
            <Route exact path={routes.root} component={() => <Home />} />
            <Route path={routes.home} component={() => <Home />} />
            {/* 404 */}
            <Route path={routes.fourOhFour} component={() => <FourOHFour />} />
            <Redirect to={routes.fourOhFour} />
          </Switch>
        </Router>
      </React.Suspense>
    </Container>
  );
};

export default App;
