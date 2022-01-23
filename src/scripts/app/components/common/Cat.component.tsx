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
  const [{ url: catUrl, count: catCount, start }, setState] =
    useSetState<ICatState>();

  // only set on initial render
  useEffectOnce(() => {
    setState({ start: new Date(), url: "https://cataas.com/cat/gif" });
  });

  useInterval(() => {
    setState({ count: catCount + 1 });
    (async () => {
      const result = await GetCatUrl();
      setState({ url: result });
    })();
  }, minutesToMilliseconds(1));

  return (
    <div>
      <img
        src={catUrl}
        style={{ maxHeight: "380px", maxWidth: "370px", objectFit: "fill" }}
      />
      <p>
        There has been {catCount} cats since {dayjs(start).format("HH:mm")}
      </p>
    </div>
  );
};

export default Cat;
