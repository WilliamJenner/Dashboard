import React from "react";
import Ticker from "react-ticker";
import { GetLatestAlerts } from "../../actions/alerts";
import { useInterval } from "../../hooks/useInterval";
import { minutesToMilliseconds } from "../../utils/number";
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
    if (alerts === undefined || alerts === []) {
        return null;
    }
    return (React.createElement("div", { className: "ticker" },
        React.createElement("span", { className: "ticker_title px-2" }),
        React.createElement(Ticker, null, ({ index }) => (React.createElement("span", { className: "ticker_content" }, alerts.join("    |    "))))));
};
export default AlertTicker;
//# sourceMappingURL=AlertTicker.component.js.map