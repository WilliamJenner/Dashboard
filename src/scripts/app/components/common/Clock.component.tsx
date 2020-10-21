import dayjs, { Dayjs } from "dayjs";
import React from "react";
import { useInterval } from "../../hooks/useInterval";
import { secondsToMilliseconds } from "../../utils/number";

const Clock: React.FC = () => {
  const [time, setTime] = React.useState<Dayjs>(dayjs());

  useInterval(() => {
    setTime(dayjs());
  }, secondsToMilliseconds(1));

  return (
    <div className={"clock"}>
      <h1>{time.format("HH:mm:ss")}</h1>
      <h2>{time.format("YYYY-MM-DD")}</h2>
    </div>
  );
};

export default Clock;
