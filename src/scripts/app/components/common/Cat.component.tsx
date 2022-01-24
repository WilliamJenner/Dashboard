import { useInterval } from "../../hooks/useInterval";
import * as React from "react";
import { minutesToMilliseconds } from "../../../app/utils/number";
import dayjs from "dayjs";
import { GetCatUrl } from "../../../app/actions/cat";
import useEffectOnce from "react-use/lib/useEffectOnce";
import useSetState from "react-use/lib/useSetState";

interface ICatProps {}

interface ICatState {
  urlOne: string;
  urlTwo: string;
  count: number;
  start: Date;
}

export const Cat: React.FC<ICatProps> = () => {
  const [
    { urlOne: catUrlOne, urlTwo: catUrlTwo, count: catCount, start },
    setState,
  ] = useSetState<ICatState>();

  // only set on initial render
  useEffectOnce(() => {
    setState({
      start: new Date(),
      urlOne: "https://cataas.com/cat/gif",
      urlTwo: "https://cataas.com/cat/gif",
      count: 1,
    });
  });

  useInterval(() => {
    setState({ count: catCount + 2 });
    (async () => {
      let [one, two] = [await GetCatUrl(), await GetCatUrl()];

      do {
        two = await GetCatUrl();
      } while (one === two);

      setState({ urlOne: one, urlTwo: two });
    })();
  }, minutesToMilliseconds(1));

  return (
    <div>
      <img className="cat" src={catUrlOne} />
      <img className="cat" src={catUrlTwo} />
      <p>
        There has been {catCount} cats since {dayjs(start).format("HH:mm")}
      </p>
    </div>
  );
};

export default Cat;
