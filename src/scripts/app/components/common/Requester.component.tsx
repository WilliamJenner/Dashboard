import React, { Component, useEffect } from "react";
import { GetRequiredAmount } from "../../actions/requester";
import { hoursToMilliseconds } from "../../utils/number";
import { useInterval } from "../../hooks/useInterval";
import { RequesterLookup, IRequesterLookup, IBin } from "../../client/client";

interface IRequesterProps {
  requestedAmount: number;
}

const RequesterWidget: React.SFC<IRequesterProps> = (props) => {
  const amount = props.requestedAmount;

  return (
    <div className={"requester"}>
      <div className={"requester__text"}>
        <h1>Amount Required:{amount}</h1>
      </div>
    </div>
  );
};

export const Requester: React.FunctionComponent<IRequesterProps> = (props) => {
  const [requestedAmount, setRequestAmount] = React.useState<
    IRequesterLookup
  >();

  const getAndSetLookup = () => {
    GetRequiredAmount().then((result) => {
      setRequestAmount(result);
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

  if (requestedAmount === undefined) {
    return <div>Client not found ask</div>;
  }

  return (
    <div className={"requester"}>
      <RequesterWidget requestedAmount={requestedAmount} />
    </div>
  );
};
