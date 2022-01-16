import { useInterval } from "../../hooks/useInterval";
import * as React from "react";
import { Spinner } from "react-bootstrap";
import {
  minutesToMilliseconds,
  hoursToMilliseconds,
} from "../../../app/utils/number";
import { AppState } from "../../state/appState";
import dayjs from "dayjs";
import { GetCatUrl } from "../../../app/actions/cat";

interface ICatProps {}

export const Cat: React.FC<ICatProps> = () => {
  const { appState } = AppState.useContainer();
  const [catUrl, setCatUrl] = React.useState<string>(
    "https://cataas.com/cat/gif"
  );
  const [catCount, setCatCount] = React.useState<number>(0);
  const [start, setStart] = React.useState<Date>();

  useInterval(() => {
    setCatCount(catCount + 1);
    (async () => {
      const result = await GetCatUrl();
      setCatUrl(result);
    })();
  }, minutesToMilliseconds(1));

  useInterval(() => {
    setCatCount(0);
    setStart(new Date());
  }, hoursToMilliseconds(12));

  return (
    <div>
      <img src={catUrl} style={{ maxHeight: "450px" }} />
      <p>
        There has been {catCount} cats since {dayjs(start).format("HH:mm")}
      </p>
    </div>
  );
};

export default Cat;
