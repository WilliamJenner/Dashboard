import * as React from "react";
import { Row, Col } from "react-bootstrap";
import { Bindicator } from "./Bindicator.component";
export const Dashboard = () => {
    return (React.createElement("div", { className: "dashboard" },
        React.createElement(Row, { className: "dash-row" },
            React.createElement(Col, { className: "dash-item" },
                React.createElement(Bindicator, null)),
            React.createElement(Col, { className: "dash-item" }, "2"),
            React.createElement(Col, { className: "dash-item" }, "3")),
        React.createElement(Row, { className: "dash-row" },
            React.createElement(Col, { className: "dash-item" }, "4"),
            React.createElement(Col, { className: "dash-item dash-item--grow" },
                " ",
                React.createElement(Bindicator, null)))));
};
//# sourceMappingURL=Dashboard.component.js.map