import dayjs, { Dayjs } from "dayjs";
import React from "react";
import { getWeather } from "../../actions/weather";
import { OpenWeatherCurrent } from "../../client/client";
import { useInterval } from "../../hooks/useInterval";
import {
  minutesToMilliseconds,
  secondsToMilliseconds,
} from "../../utils/number";
import { capitaliseFirst } from "../../utils/string";

const Clock: React.FC = () => {
  const [time, setTime] = React.useState<Dayjs>(dayjs());

  useInterval(() => {
    setTime(dayjs());
  }, secondsToMilliseconds(1));

  return (
    <div className={`clock`}>
      <h1>{time.format("HH:mm:ss")}</h1>
      <h2>{time.format("YYYY-MM-DD")}</h2>
    </div>
  );
};

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
      <h1>{weather?.main?.temperature}°C</h1>
      <div>
        <span>Feels like {weather?.main?.feelsLike}°C</span>
      </div>
      <div>
        {weather?.weather?.map((x) => {
          return <span>{capitaliseFirst(x.description as string)}</span>;
        })}
      </div>
    </div>
  );
};

const Environment: React.FC = () => {
  return (
    <div className={"environment"}>
      <Clock />
      <Weather />
    </div>
  );
};

export default Environment;
