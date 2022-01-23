import { useInterval } from "../../hooks/useInterval";
import * as React from "react";
import { minutesToMilliseconds } from "../../../app/utils/number";
import dayjs from "dayjs";
import { GetCatUrl } from "../../../app/actions/cat";
import useEffectOnce from "react-use/lib/useEffectOnce";
import useSetState from "react-use/lib/useSetState";

interface ICatProps {}

interface ICatState {
  url: string;
  count: number;
  start: Date;
}

export const Cat: React.FC<ICatProps> = () => {
  const [{ url1: catUrl1, url2, catUrl2, count: catCount, start }, setState] =
    useSetState<ICatState>();

  // only set on initial render
  useEffectOnce(() => {
    setState({
      start: new Date(),
      url: "https://cataas.com/cat/gif",
      count: 1,
    });
  });

  useInterval(() => {
    setState({ count: catCount + 2 });
    (async () => {
      const result1 = await GetCatUrl();
      const result2 = await GetCatUrl();
      setState({ url1: result1, url2: result2 });
    })();
  }, minutesToMilliseconds(1));

  return (
    <div>
      <img className="cat" src={catUrl1} />
      <img className="cat" src={catUrl1} />
      <p>
        There has been {catCount} cats since {dayjs(start).format("HH:mm")}
      </p>
    </div>
  );
};

export default Cat;
