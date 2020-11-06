import dayjs from "dayjs";
import React from "react";
import { useInterval } from "../../hooks/useInterval";
import { secondsToMilliseconds } from "../../utils/number";
import { Moon, Sun } from "react-feather";
const Clock = () => {
    const [time, setTime] = React.useState(dayjs());
    const night_time = 20;
    const is_night = time.hour() >= night_time;
    useInterval(() => {
        setTime(dayjs());
    }, secondsToMilliseconds(1));
    return (React.createElement("div", { className: `clock` },
        React.createElement("h1", null, time.format("HH:mm:ss")),
        React.createElement("span", null, is_night && React.createElement(Moon, null)),
        React.createElement("span", null, !is_night && React.createElement(Sun, null))));
};
export default Clock;
//# sourceMappingURL=Clock.component.js.map