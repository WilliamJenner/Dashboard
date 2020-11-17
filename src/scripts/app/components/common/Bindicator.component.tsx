import React, { Component, useEffect } from "react";
import moment from "moment";
import { capitaliseFirst, getBinDisplayName } from "../../utils/string";
import { useInterval } from "../../hooks/useInterval";
import { daysBetween, hoursToMilliseconds } from "../../utils/number";
import { NamedBin } from "../../types/bins";
import { BinLookup, IBinLookup, IBin } from "../../client/client";
import { GetBins } from "../../actions/bins";
import { AppState } from "../../state/appState";

interface IBindicatorProps {}

interface IBinNotificationProps {
  namedBin: NamedBin;
}

const BinNotification: React.FC<IBinNotificationProps> = (props) => {
  const { config } = AppState.useContainer();
  const { bin, name } = props.namedBin;

  // Got to check to stop the compiler complaining
  if (bin?.next === undefined) {
    return null;
  }

  const textClass =
    daysBetween(bin?.next, new Date()) < config.appState.binNoticePeriod
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
          {moment(bin?.next).format("dddd, MMMM Do YYYY")}
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
  useEffect(() => {
    getAndSetLookup();
  }, []);

  // Then poll every X time
  useInterval(() => {
    getAndSetLookup();
  }, hoursToMilliseconds(1));

  if (binLookup === undefined) {
    return <div>Ain't no bins</div>;
  }

  const orderedBins: NamedBin[] = Object.keys(binLookup)
    .map(
      (key): NamedBin => {
        return {
          bin: binLookup[key as keyof IBinLookup],
          name: key,
        };
      }
    )
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
