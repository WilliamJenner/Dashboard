import dayjs, { Dayjs } from "dayjs";
import React from "react";
import { useInterval } from "../../hooks/useInterval";
import { secondsToMilliseconds } from "../../utils/number";
import { Moon, Sun } from "react-feather";

const Clock: React.FC = () => {
  const [time, setTime] = React.useState<Dayjs>(dayjs());
  const night_time = 20;
  const is_night = time.hour() >= night_time;

  useInterval(() => {
    setTime(dayjs());
  }, secondsToMilliseconds(1));

  return (
    <div className={`clock`}>
      <h1>
        {time.format("ddd, DD of MMM HH:mm:ss")}{" "}
        <span className={"clock__icon"}>{is_night ? <Moon /> : <Sun />}</span>
      </h1>
    </div>
  );
};

export default Clock;
