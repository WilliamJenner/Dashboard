import React from "react";
import { getRequiredAmount } from "../../actions/requester";
import { hoursToMilliseconds, minutesToMilliseconds } from "../../utils/number";
import { useInterval } from "../../hooks/useInterval";

export const Requester: React.FC = () => {
  const [requestedAmount, setRequestAmount] = React.useState<number>();

  const getAndSetRequest = () => {
    getRequiredAmount().then((result) => {
      setRequestAmount(result);
    });
  };

  // Lookup bins on startup
  React.useEffect(() => {
    getAndSetRequest();
  }, []);

  // Then poll every X time
  useInterval(() => {
    getAndSetRequest();
  }, minutesToMilliseconds(10));

  if (requestedAmount === undefined) {
    return <div>Client not found</div>;
  }

  return (
    <div className={"requester"}>
      <div className={"requester__text"}>
        <h1>Amount Required: {requestedAmount}</h1>
      </div>
    </div>
  );
};

export default Requester;
