import * as React from "react";
import { Row, Col } from "react-bootstrap";
import AlertTicker from "./AlertTicker.component";
import Bindicator from "./Bindicator.component";
import Weather from "./Weather.comonent";
import Clock from "./Clock.component";
import Requester from "./Requester.component";
import SecurityCamera from "./SecurityCam.component";
export const Dashboard = () => {
    return (React.createElement("div", { className: "dashboard" },
        React.createElement(Row, { className: "dash-row" },
            React.createElement(Col, { className: "dash-item" },
                React.createElement(AlertTicker, null))),
        React.createElement(Row, { className: "dash-row" },
            React.createElement(Col, { className: "dash-item" },
                React.createElement(Bindicator, null)),
            React.createElement(Col, { className: "dash-item" },
                React.createElement(SecurityCamera, null))),
        React.createElement(Row, { className: "dash-row" },
            React.createElement(Col, { className: "dash-item" },
                React.createElement(Weather, null)),
            React.createElement(Col, { className: "dash-item" },
                React.createElement(Clock, null)),
            React.createElement(Col, { className: "dash-item" },
                React.createElement(Requester, null)),
            React.createElement(Col, { className: "dash-item dash-item--grow" }, "5"))));
};
//# sourceMappingURL=Dashboard.component.js.map