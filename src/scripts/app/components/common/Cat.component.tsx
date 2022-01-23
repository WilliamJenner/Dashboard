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
  const [
    { urlOne: catUrlOne, urlTwo, catUrlTwo, count: catCount, start },
    setState,
  ] = useSetState<ICatState>();

  // only set on initial render
  useEffectOnce(() => {
    setState({
      start: new Date(),
      catUrlOne: "https://cataas.com/cat/gif",
      catUrlTwo: "https://cataas.com/cat/gif",
      count: 1,
    });
  });

  useInterval(() => {
    setState({ count: catCount + 2 });
    (async () => {
      const resultOne = await GetCatUrl();
      const resultTwo = await GetCatUrl();
      setState({ urlOne: resultOne, urlTwo: resultTwo });
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
