import * as React from "react";
import { Row, Col } from "react-bootstrap";
import NewsTicker from "./NewsTicker.component";
import Bindicator from "./Bindicator.component";
import Clock from "./Clock.component";
import SecurityCamera from "./SecurityCam.component";
import Weather from "./Weather.component";
import { ServerStatus } from "./ServerStatus.component";
import Cat from "./Cat.component";
import BlueMap from "./BlueMap.component";
interface IDashboardProps {}

export const Dashboard: React.FC<IDashboardProps> = () => {
  return (
    <div className={"dashboard"}>
      <Row className={"dash-row"}>
        <Col className={"dash-item"}>
          <div className={"d-flex justify-content-center"}>
            <Clock />
            <Weather />
          </div>
        </Col>
        <Col className={"dash-item"}>
          <div className={"d-flex justify-content-center"}>
            <Bindicator />
          </div>
        </Col>
        <Col className="dash-item">
          <div className={"d-flex justify-content-center"}>
            <ServerStatus />
          </div>
        </Col>
      </Row>
      <Row className={"dash-row"}>
        <Col className={"dash-item"}>
          <SecurityCamera />
        </Col>
        <Col className={"dash-item"}>
          <Cat />
        </Col>
        <Col className={"dash-item"}>
          <BlueMap />
        </Col>
      </Row>
      <Row className={"dash-row"}>
        <Col className={"dash-item"}>
          <NewsTicker />
        </Col>
      </Row>
    </div>
  );
};
