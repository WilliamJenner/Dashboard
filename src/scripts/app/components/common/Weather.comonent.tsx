import dayjs, { Dayjs } from "dayjs";
import React from "react";
import { CloudRain, Umbrella } from "react-feather";
import { getWeather } from "../../actions/weather";
import { OpenWeatherCurrent } from "../../client/client";
import { useInterval } from "../../hooks/useInterval";
import {
    minutesToMilliseconds,
    secondsToMilliseconds,
} from "../../utils/number";
import { capitaliseFirst } from "../../utils/string";
import classNames from "classnames";


const Weather: React.FC = () => {
    const [weather, setWeather] = React.useState<OpenWeatherCurrent>();

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


    return (
        <div className={`weather`}>
            <h1 className={classNames({ 'weather__cold': weather?.main?.temperature && weather.main.temperature < 15, 'weather__hot': weather?.main?.temperature && weather.main.temperature > 20 })}>{weather?.main?.temperature}°C</h1>
            <div className={'weather__info'}>
                <span>Feels like {weather?.main?.feelsLike}°C</span>
                <span className={'weather'}>{weather?.main?.humidity && weather.main.humidity > 80 && <span>Its <CloudRain /> bring an <Umbrella /></span>}</span>
                {weather?.weather?.map((x) => {
                    return <span>{capitaliseFirst(x.description as string)}</span>;
                })}
                {weather?.main?.feelsLike && weather.main.feelsLike < 8 && <span>Shut the damn door</span>}
            </div>
        </div>
    );
};

export default Weather;