import * as React from "react";
import { Row, Col } from "react-bootstrap";

interface IDashboardProps {}

export const Dashboard: React.FC<IDashboardProps> = () => {
  return (
    <div className={"dashboard"}>
      <Row className={"dash-row"}>
        <Col className={"dash-item"}>1</Col>
        <Col className={"dash-item"}>2</Col>
        <Col className={"dash-item"}>3</Col>
      </Row>
      <Row className={"dash-row"}>
        <Col className={"dash-item"}>4</Col>
        <Col className={"dash-item"}>5</Col>
        <Col className={"dash-item"}>6</Col>
      </Row>
    </div>
  );
};
