import * as React from "react";
import { Row, Col } from "react-bootstrap";
import AlertTicker from "./AlertTicker.component";
import Bindicator from "./Bindicator.component";
import Clock from "./Clock.component";
import Requester from "./Requester.component";
import SecurityCamera from "./SecurityCam.component";
import Weather from "./Weather.component";
interface IDashboardProps {}

export const Dashboard: React.FC<IDashboardProps> = () => {
  return (
    <div className={"dashboard"}>
      <Row className={"dash-row"}>
        <Col className={"dash-item"}>
          <Requester />
        </Col>
        <Col className={"dash-item"}>
          <Clock />
          <Weather />
        </Col>
        <Col className={"dash-item dash-item--grow"}>
          <Bindicator />
        </Col>
      </Row>

      <Row className={"dash-row"}>
        <Col className={"dash-item"}></Col>
        <Col className={"dash-item"}>
          <SecurityCamera />
        </Col>
      </Row>

      <Row className={"dash-row"}>
        <Col className={"dash-item"}>
          <AlertTicker />
        </Col>
      </Row>
    </div>
  );
};
