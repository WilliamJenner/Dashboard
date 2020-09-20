import * as React from "react";
import { Row, Col } from "react-bootstrap";
import { Bindicator } from "./Bindicator.component";

interface IDashboardProps {}

export const Dashboard: React.FC<IDashboardProps> = () => {
  return (
    <div className={"dashboard"}>
      <Row className={"dash-row"}>
        <Col className={"dash-item"}>
          <Bindicator />
        </Col>
        <Col className={"dash-item"}>2</Col>
        <Col className={"dash-item"}>3</Col>
      </Row>
      <Row className={"dash-row"}>
        <Col className={"dash-item"}>4</Col>
        <Col className={"dash-item dash-item--grow"}>
          {" "}
          <Bindicator />
        </Col>
      </Row>
    </div>
  );
};

// <div className={"dashboard"}>
//   <div className={"dash-item"}>1</div>
//   <div className={"dash-item"}>2</div>
//   <div className={"dash-item"}>3</div>
//   <div className={"dash-item"}>4</div>
//   <div className={"dash-item"}>5</div>
//   <div className={"dash-item"}>6</div>
// </div>
