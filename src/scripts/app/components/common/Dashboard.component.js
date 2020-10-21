import * as React from "react";
import { Row, Col } from "react-bootstrap";
import AlertTicker from "./AlertTicker.component";
import { Bindicator } from "./Bindicator.component";
import { SecurityCamera } from "./SecurityCam.component";
export const Dashboard = () => {
    return (React.createElement("div", { className: "dashboard" },
        React.createElement(Row, { className: "dash-row" },
            React.createElement(Col, { className: "dash-item" },
                React.createElement(Bindicator, null)),
            React.createElement(Col, { className: "dash-item" },
                React.createElement(SecurityCamera, null))),
        React.createElement(Row, { className: "dash-row" },
            React.createElement(Col, { className: "dash-item" }, "3"),
            React.createElement(Col, { className: "dash-item" }, "4"),
            React.createElement(Col, { className: "dash-item dash-item--grow" }, "5")),
        React.createElement(Row, { className: "dash-row" },
            React.createElement(Col, { className: "dash-item" },
                React.createElement(AlertTicker, null)))));
};
//# sourceMappingURL=Dashboard.component.js.map