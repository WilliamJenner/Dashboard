import * as React from "react";
import { Container, Spinner } from "react-bootstrap";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
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
      <BrowserRouter>
        <React.Suspense
          fallback={
            <div className="flex justify-center">
              <Spinner animation="border" />
            </div>
          }
        >
          <Routes>
            <Route path={routes.root} element={<Home />} />
            <Route path={routes.home} element={<Home />} />
            <Route path={routes.fourOhFour} element={<FourOHFour />} />
            <Route path="*" element={<Navigate to={routes.fourOhFour} />} />
          </Routes>
        </React.Suspense>
      </BrowserRouter>
    </Container>
  );
};

export default App;
