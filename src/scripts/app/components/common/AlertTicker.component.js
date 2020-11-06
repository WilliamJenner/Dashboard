import dayjs from "dayjs";
import React from "react";
import Ticker from "react-ticker";
import { getLatestAlerts } from "../../actions/alerts";
import { useInterval } from "../../hooks/useInterval";
import { minutesToMilliseconds } from "../../utils/number";
import { capitaliseFirst } from "../../utils/string";
const AlertMessage = ({ alert }) => {
    const { message, createdBy, dateCreated } = alert;
    return (React.createElement("div", { className: "ticker__content" },
        React.createElement("div", null, message),
        React.createElement("div", { className: "ticker__content__author" },
            "Sent by ",
            capitaliseFirst(createdBy),
            " ",
            React.createElement("span", { className: "ticker__content__author--time" }, dayjs(dateCreated).format("YYYY-MM-DD HH:mm")))));
};
const AlertTicker = () => {
    const [alerts, setAlerts] = React.useState([]);
    const getAndSetAlerts = () => {
        getLatestAlerts().then((result) => {
            setAlerts(result);
        });
    };
    React.useEffect(() => {
        getAndSetAlerts();
    }, []);
    useInterval(() => {
        getAndSetAlerts();
    }, minutesToMilliseconds(0.2));
    if (alerts === undefined || alerts.length === 0) {
        return null;
    }
    return (React.createElement("div", { className: "ticker" },
        React.createElement(Ticker, null, ({ index }) => alerts.map((alert) => {
            return React.createElement(AlertMessage, { alert: alert });
        }))));
};
export default AlertTicker;
//# sourceMappingURL=AlertTicker.component.js.map