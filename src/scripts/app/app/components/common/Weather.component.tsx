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

  const shutTheDoor = weather?.main?.feelsLike && weather.main.feelsLike < 8;

  return (
    <div className={`weather`}>
      <div className={"weather__info"}>
        <h1
          className={classNames({
            "weather--cold":
              weather?.main?.temperature && weather.main.temperature < 15,
            "weather--hot":
              weather?.main?.temperature && weather.main.temperature > 20,
          })}
        >
          {weather?.main?.temperature}°C {shutTheDoor && "SHUT JONS DAMN DOOR"}
        </h1>
      </div>
      <div className={"weather__info "}>
        <span>Feels like {weather?.main?.feelsLike}°C</span>
        {weather?.weather?.map((x, i) => {
          return (
            <span key={`${i}_span`}>
              {capitaliseFirst(x.description as string)}
            </span>
          );
        })}

        <span>
          {weather?.main?.humidity && weather.main.humidity}% humidity
        </span>
      </div>
    </div>
  );
};

export default Weather;
