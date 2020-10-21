import React, { Component, useEffect } from "react";
import moment from "moment";
import { capitaliseFirst, getBinDisplayName } from "../../utils/string";
import { useInterval } from "../../hooks/useInterval";
import { hoursToMilliseconds } from "../../utils/number";
import { NamedBin } from "../../types/bins";
import { BinLookup, IBinLookup, IBin } from "../../client/client";
import { GetBins } from "../../actions/bins";

interface IBindicatorProps {}

interface IBinNotificationProps {
  namedBin: NamedBin;
  callToAction: boolean;
}

const BinNotification: React.SFC<IBinNotificationProps> = (props) => {
  const { bin, name } = props.namedBin;
  const textClass = props.callToAction ? "call-to-action" : "";

  return (
    <div className={"bin-notification"}>
      <div className={"bin-notification__text"}>
        <h1>
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
    });

  const lastBin = orderedBins[orderedBins.length - 1];

  console.log({ orderedBins });

  return (
    <div className={"bindicator"}>
      {orderedBins.map((b, index) => {
        return (
          <BinNotification
            key={index}
            namedBin={b}
            callToAction={b?.name !== lastBin?.name}
          />
        );
      })}
    </div>
  );
};

export default Bindicator;
