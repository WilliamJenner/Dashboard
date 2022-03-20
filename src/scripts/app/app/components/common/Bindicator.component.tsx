import React from "react";
import dayjs from "dayjs";
import weekOfYear from "dayjs/plugin/weekOfYear";
import advancedFormat from "dayjs/plugin/advancedFormat";
import { getBinDisplayName } from "../../utils/string";
import { useInterval } from "../../hooks/useInterval";
import { daysBetween, hoursToMilliseconds } from "../../utils/number";
import { NamedBin } from "../../types/bins";
import { BinLookup, IBinLookup } from "../../client/client";
import { GetBins } from "../../actions/bins";
import { AppState } from "../../state/appState";
import useEffectOnce from "react-use/lib/useEffectOnce";

dayjs.extend(weekOfYear);
dayjs.extend(advancedFormat);

interface IBindicatorProps {}

interface IBinNotificationProps {
  namedBin: NamedBin;
}

const BinNotification: React.FC<IBinNotificationProps> = (props) => {
  const { appState } = AppState.useContainer();
  const { bin, name } = props.namedBin;

  // Got to check to stop the compiler complaining
  if (bin?.next === undefined || appState === undefined) {
    return null;
  }

  const textClass =
    daysBetween(bin?.next, new Date()) < appState.binNoticePeriod
      ? "call-to-action"
      : "";

  return (
    <div className={"bin-notification"}>
      <h1 className={"bin-notification__text"}>
        <span className={textClass}>
          {getBinDisplayName(name as keyof BinLookup)}
        </span>{" "}
        next due on{" "}
        <span className={textClass}>
          {dayjs(bin?.next).format("dddd, MMMM Do")}
        </span>
        .
      </h1>
    </div>
  );
};

export const Bindicator: React.FunctionComponent<IBindicatorProps> = (
  props
) => {
  const [binLookup, setBinLookup] = React.useState<IBinLookup>();

  const getAndSetLookup = () => {
    GetBins().then((result) => {
      setBinLookup(result);
    });
  };

  // Lookup bins on startup
  useEffectOnce(() => {
    getAndSetLookup();
  });

  // Then poll every X time
  useInterval(() => {
    getAndSetLookup();
  }, hoursToMilliseconds(1));

  if (binLookup === undefined) {
    return <div>Ain't no bins</div>;
  }

  const orderedBins: NamedBin[] = Object.keys(binLookup)
    .map((key): NamedBin => {
      return {
        bin: binLookup[key as keyof IBinLookup],
        name: key,
      };
    })
    .sort((a: NamedBin, b: NamedBin): number => {
      // defaults if undefined
      let firstDate = a!.bin!.next ? a!.bin!.next : new Date();
      let secondDate = b!.bin!.next ? b!.bin!.next : new Date();

      if (firstDate < secondDate) {
        return -1;
      } else if (firstDate === secondDate) {
        return 0;
      } else if (firstDate > secondDate) {
        return 1;
      } else return 1;
    })
    .slice(0, 2); // take the top two | two closest collections

  return (
    <div className={"bindicator"}>
      {orderedBins.map((b, index) => {
        return <BinNotification key={index} namedBin={b} />;
      })}
    </div>
  );
};

export default Bindicator;
