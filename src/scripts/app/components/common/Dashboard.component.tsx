import * as React from "react";
import { Row, Col } from "react-bootstrap";
import NewsTicker from "./NewsTicker.component";
import Bindicator from "./Bindicator.component";
import Clock from "./Clock.component";
import SecurityCamera from "./SecurityCam.component";
import Weather from "./Weather.component";
import { ServerStatus } from "./ServerStatus.component";
interface IDashboardProps {}

export const Dashboard: React.FC<IDashboardProps> = () => {
  return (
    <div className={"dashboard"}>
      <Row className={"dash-row"}>
        <Col className={"dash-item"}>
          <Clock />
          <Weather />
        </Col>
        <Col className={"dash-item"}>
          <Bindicator />
        </Col>
        <Col className="dash-item">
          <ServerStatus />
        </Col>
      </Row>
      <Row className={"dash-row"}>
        <Col className={"dash-item"}></Col>
        <Col className={"dash-item"}>
          <SecurityCamera />
        </Col>
        <Col className={"dash-item"}></Col>
      </Row>
      <Row className={"dash-row"}>
        <Col className={"dash-item"}>
          <NewsTicker />
        </Col>
      </Row>
    </div>
  );
};
