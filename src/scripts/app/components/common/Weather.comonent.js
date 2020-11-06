import React from "react";
import { CloudRain, Umbrella } from "react-feather";
import { getWeather } from "../../actions/weather";
import { useInterval } from "../../hooks/useInterval";
import { minutesToMilliseconds, } from "../../utils/number";
import { capitaliseFirst } from "../../utils/string";
import classNames from "classnames";
const Weather = () => {
    var _a, _b, _c, _d, _e, _f, _g;
    const [weather, setWeather] = React.useState();
    const getAndSetWeather = () => {
        getWeather().then((result) => {
            setWeather(result);
        });
    };
    React.useEffect(() => {
        getAndSetWeather();
    }, []);
    useInterval(() => {
        getAndSetWeather();
    }, minutesToMilliseconds(30));
    return (React.createElement("div", { className: `weather` },
        React.createElement("h1", { className: classNames({ 'weather--cold': ((_a = weather === null || weather === void 0 ? void 0 : weather.main) === null || _a === void 0 ? void 0 : _a.temperature) && weather.main.temperature < 15, 'weather--hot': ((_b = weather === null || weather === void 0 ? void 0 : weather.main) === null || _b === void 0 ? void 0 : _b.temperature) && weather.main.temperature > 20 }) }, (_c = weather === null || weather === void 0 ? void 0 : weather.main) === null || _c === void 0 ? void 0 :
            _c.temperature,
            "\u00B0C"),
        React.createElement("div", { className: 'weather__info' },
            React.createElement("span", null,
                "Feels like ", (_d = weather === null || weather === void 0 ? void 0 : weather.main) === null || _d === void 0 ? void 0 :
                _d.feelsLike,
                "\u00B0C"),
            React.createElement("span", { className: 'weather' }, ((_e = weather === null || weather === void 0 ? void 0 : weather.main) === null || _e === void 0 ? void 0 : _e.humidity) && weather.main.humidity > 80 && React.createElement("span", null,
                "Its ",
                React.createElement(CloudRain, null),
                " bring an ",
                React.createElement(Umbrella, null))), (_f = weather === null || weather === void 0 ? void 0 : weather.weather) === null || _f === void 0 ? void 0 :
            _f.map((x) => {
                return React.createElement("span", null, capitaliseFirst(x.description));
            }),
            ((_g = weather === null || weather === void 0 ? void 0 : weather.main) === null || _g === void 0 ? void 0 : _g.feelsLike) && weather.main.feelsLike < 8 && React.createElement("span", null, "Shut the damn door"))));
};
export default Weather;
//# sourceMappingURL=Weather.comonent.js.map