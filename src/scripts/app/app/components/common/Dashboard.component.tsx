import * as React from "react";
import { Row, Col } from "react-bootstrap";
import Bindicator from "./Bindicator.component";
import { BlueMap } from "./BlueMap.component";
import SecurityCamera from "./SecurityCam.component";
import Cat from "./Cat.component";
import ClockAndWeather from "./ClockAndWeather.component";
import NewsTicker from "./NewsTicker.component";
import ServerStatus from "./ServerStatus.component";
interface IDashboardProps {}

export const Dashboard: React.FC<IDashboardProps> = () => {
  return (
    <div className={"dashboard"}>
      <Row className={"dash-row"}>
        <Col className={"dash-item"}>
          <div className={"d-flex justify-content-center h-100 flex-column"}>
            <ClockAndWeather />
          </div>
        </Col>
        <Col className={"dash-item"}>
          <div className={"d-flex justify-content-center h-100 flex-column"}>
            <Bindicator />
          </div>
        </Col>
        <Col className="dash-item">
          <div className={"d-flex justify-content-center h-100 flex-column"}>
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
