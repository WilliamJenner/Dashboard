import * as React from "react";
import { Row, Col } from "react-bootstrap";
import AlertTicker from "./AlertTicker.component";
import Bindicator from "./Bindicator.component";
import Weather from "./Weather.comonent";
import Clock from "./Clock.component";
import Requester from "./Requester.component";
import SecurityCamera from "./SecurityCam.component";
import PieChart from "./Piechart";

interface IDashboardProps {}

export const Dashboard: React.FC<IDashboardProps> = () => {
  return (
    <div className={"dashboard"}>
      <Row className={"dash-row"}>
        <Col className={"dash-item"}>
          <AlertTicker />
        </Col>
      </Row>
      <Row className={"dash-row"}>
        <Col className={"dash-item"}>
          <PieChart />
        </Col>
        <Col className={"dash-item"}>
          <SecurityCamera />
        </Col>
      </Row>
      <Row className={"dash-row"}>
        <Col className={"dash-item"}>
          <Weather />
        </Col>
        <Col className={"dash-item"}>
          <Clock />
        </Col>
        <Col className={"dash-item"}>
          <Requester />
        </Col>

        <Col className={"dash-item dash-item--grow"}>
          <Bindicator />
        </Col>
      </Row>
    </div>
  );
};
