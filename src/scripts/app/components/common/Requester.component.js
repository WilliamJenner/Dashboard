import React from "react";
import { getActiveRequests, getRequiredAmount } from "../../actions/requester";
import { minutesToMilliseconds } from "../../utils/number";
import { useInterval } from "../../hooks/useInterval";
import Ticker from "react-ticker";
import { capitaliseFirst } from "../../utils/string";
const RequestMessage = ({ request }) => {
    const { requester, requestedAmount } = request;
    return (React.createElement("div", { className: "ticker__content" },
        React.createElement("h5", { className: "ticker__content__amount" }, requestedAmount),
        React.createElement("div", { className: "ticker__content__author" },
            "Request by ",
            capitaliseFirst(requester))));
};
export const Requester = () => {
    const [requestedAmount, setRequestAmount] = React.useState();
    const [requests, setRequests] = React.useState();
    const getAndSetRequest = () => {
        getRequiredAmount().then((result) => {
            setRequestAmount(result);
        });
        getActiveRequests().then((result) => {
            setRequests(result);
        });
    };
    React.useEffect(() => {
        getAndSetRequest();
    }, []);
    useInterval(() => {
        getAndSetRequest();
    }, minutesToMilliseconds(10));
    if (requestedAmount === undefined || requests === undefined) {
        return React.createElement("div", null, "Client not found");
    }
    return (React.createElement("div", { className: "requester" },
        React.createElement("div", { className: "requester__text" },
            React.createElement("h2", null, "Amount Required:"),
            React.createElement("h1", { className: "requester__amount" }, requestedAmount)),
        React.createElement("div", { className: "requester__requesters" },
            React.createElement(Ticker, null, ({ index }) => requests.map(request => {
                return React.createElement(RequestMessage, { request: request });
            })))));
};
export default Requester;
//# sourceMappingURL=Requester.component.js.map