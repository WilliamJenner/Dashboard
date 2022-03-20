import * as React from "react";
import { Row, Col, Spinner } from "react-bootstrap";
import Loadable from "react-loadable";
interface IDashboardProps {}

export const Dashboard: React.FC<IDashboardProps> = () => {
  const Bindicator = Loadable({
    loader: () =>
      import(/* webpackChunkName: 'bindicator' */ "./Bindicator.component"),
    loading() {
      return <Spinner animation="border" />;
    },
  });
  const SecurityCamera = Loadable({
    loader: () =>
      import(/* webpackChunkName: 'security-cam' */ "./SecurityCam.component"),
    loading() {
      return <Spinner animation="border" />;
    },
  });
  const BlueMap = Loadable({
    loader: () =>
      import(/* webpackChunkName: 'bluemap' */ "./BlueMap.component"),
    loading() {
      return <Spinner animation="border" />;
    },
  });
  const News = Loadable({
    loader: () =>
      import(/* webpackChunkName: 'news' */ "./NewsTicker.component"),
    loading() {
      return <Spinner animation="border" />;
    },
  });
  const Status = Loadable({
    loader: () =>
      import(
        /* webpackChunkName: 'server-status' */ "./ServerStatus.component"
      ),
    loading() {
      return <Spinner animation="border" />;
    },
  });
  const CatPics = Loadable({
    loader: () => import(/* webpackChunkName: 'cat' */ "./Cat.component"),
    loading() {
      return <Spinner animation="border" />;
    },
  });
  const ClockWithWeather = Loadable({
    loader: () => {
      return import(
        /* webpackChunkName: 'clockweather' */ "./ClockAndWeather.component"
      );
    },
    loading() {
      return <Spinner animation="border" />;
    },
  });

  return (
    <div className={"dashboard"}>
      <Row className={"dash-row"}>
        <Col className={"dash-item"}>
          <div className={"d-flex justify-content-center h-100 flex-column"}>
            <ClockWithWeather />
          </div>
        </Col>
        <Col className={"dash-item"}>
          <div className={"d-flex justify-content-center h-100 flex-column"}>
            <Bindicator />
          </div>
        </Col>
        <Col className="dash-item">
          <div className={"d-flex justify-content-center h-100 flex-column"}>
            <Status />
          </div>
        </Col>
      </Row>
      <Row className={"dash-row"}>
        <Col className={"dash-item"}>
          <SecurityCamera />
        </Col>
        <Col className={"dash-item"}>
          <CatPics />
        </Col>
        <Col className={"dash-item"}>
          <BlueMap />
        </Col>
      </Row>
      <Row className={"dash-row"}>
        <Col className={"dash-item"}>
          <News />
        </Col>
      </Row>
    </div>
  );
};
