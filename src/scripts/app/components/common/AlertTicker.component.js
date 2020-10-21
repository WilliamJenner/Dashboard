import React from "react";
import { Table } from "react-bootstrap";
import Ticker from "react-ticker";
import { GetLatestAlerts } from "../../actions/alerts";
import { useInterval } from "../../hooks/useInterval";
import { minutesToMilliseconds } from "../../utils/number";
const AlertTable = ({ alert }) => {
    var _a;
    return (React.createElement(Table, null,
        React.createElement("tbody", null,
            React.createElement("tr", null,
                React.createElement("th", { scope: "row" }, alert.createdBy),
                React.createElement("td", null, (_a = alert.dateCreated) === null || _a === void 0 ? void 0 : _a.toLocaleString()),
                React.createElement("td", null, alert.message)))));
};
const AlertTicker = () => {
    const [alerts, setAlerts] = React.useState([]);
    const getAndSetAlerts = () => {
        GetLatestAlerts().then((result) => {
            setAlerts(result);
        });
    };
    React.useEffect(() => {
        getAndSetAlerts();
    }, []);
    useInterval(() => {
        getAndSetAlerts();
    }, minutesToMilliseconds(1));
    console.log({ alerts });
    if (alerts === undefined || alerts.length === 0) {
        return null;
    }
    return (React.createElement("div", { className: "ticker" },
        React.createElement(Ticker, null, ({ index }) => alerts.map((alert) => {
            return React.createElement(AlertTable, { alert: alert });
        }))));
};
export default AlertTicker;
//# sourceMappingURL=AlertTicker.component.js.map