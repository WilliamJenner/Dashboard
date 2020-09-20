import React from "react";
import moment from "moment";
import { GetDisplayName } from "../../utils/string";
const BinNotification = (props) => {
    const { bin, name } = props.namedBin;
    const textClass = props.callToAction ? "call-to-action" : "";
    return (React.createElement("div", { className: "bin-notification" },
        React.createElement("div", { className: "bin-notification__text" },
            React.createElement("h1", null,
                React.createElement("span", { className: textClass }, GetDisplayName(name)),
                " ",
                "is next due on",
                " ",
                React.createElement("span", { className: textClass }, moment(bin === null || bin === void 0 ? void 0 : bin.next).format("dddd, MMMM Do YYYY")),
                "."))));
};
export const Bindicator = (props) => {
    const [binLookup, setBinLookup] = React.useState();
    if (binLookup === undefined) {
        return React.createElement("div", null, "Ain't no bins");
    }
    const orderedBins = Object.keys(binLookup)
        .map((key) => {
        return {
            bin: binLookup[key],
            name: key,
        };
    })
        .filter((bin) => {
        bin !== undefined;
    })
        .sort((a, b) => {
        let firstDate = a.bin.next ? a.bin.next : new Date();
        let secondDate = b.bin.next ? b.bin.next : new Date();
        if (firstDate < secondDate) {
            return -1;
        }
        else if (firstDate === secondDate) {
            return 0;
        }
        else if (firstDate > secondDate) {
            return 1;
        }
        else
            return 1;
    });
    const lastBin = orderedBins[orderedBins.length - 1];
    return (React.createElement("div", { className: "bindicator" }, orderedBins.map((b, index) => {
        return (React.createElement(BinNotification, { key: index, namedBin: b, callToAction: (b === null || b === void 0 ? void 0 : b.name) !== (lastBin === null || lastBin === void 0 ? void 0 : lastBin.name) }));
    })));
};
//# sourceMappingURL=Bindicator.component.js.map