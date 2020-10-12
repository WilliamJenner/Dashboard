import * as React from "react";
import { Row, Col } from "react-bootstrap";
import { Bindicator } from "./Bindicator.component";
import { SecurityCamera } from "./SecurityCam.component";

interface IDashboardProps {}

export const Dashboard: React.FC<IDashboardProps> = () => {
  return (
    <div className={"dashboard"}>
      <Row className={"dash-row"}>
        <Col className={"dash-item"}>
          <Bindicator />
        </Col>
        <Col className={"dash-item"}>
          <SecurityCamera />
        </Col>
        <Col className={"dash-item"}>3</Col>
      </Row>
      <Row className={"dash-row"}>
        <Col className={"dash-item"}>4</Col>
        <Col className={"dash-item dash-item--grow"}>5</Col>
      </Row>
    </div>
  );
};
