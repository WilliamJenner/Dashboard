import React from "react";
import { getActiveRequests, getRequiredAmount } from "../../actions/requester";
import { getRandomIndex, minutesToMilliseconds } from "../../utils/number";
import { useInterval } from "../../hooks/useInterval";
import { RequestDto } from "../../client/client";
import { capitaliseFirst } from "../../utils/string";
import PieChart from "./Piechart";
import { Data } from "react-minimal-pie-chart/types/commonTypes";
import { colours } from "../../resources/colours";

interface IRequestMessage {
  request: RequestDto;
}

const RequestMessage: React.FC<IRequestMessage> = ({ request }) => {
  const { requester, requestedAmount } = request;

  return (
    <div className={"ticker__content"}>
      <h5 className={"ticker__content__amount"}>{requestedAmount}</h5>
      <div className={"ticker__content__author"}>
        Request by {capitaliseFirst(requester as string)}
      </div>
    </div>
  );
};

export const Requester: React.FC = () => {
  const [requestedAmount, setRequestAmount] = React.useState<number>();
  const [requests, setRequests] = React.useState<RequestDto[]>();

  const getAndSetRequest = () => {
    getRequiredAmount().then((result) => {
      setRequestAmount(result);
    });
    getActiveRequests().then((result) => {
      setRequests(result);
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

  if (requestedAmount === undefined || requests === undefined) {
    return <div>Client not found</div>;
  }

  const requestData: Data = requests.map((r: RequestDto) => {
    return {
      title: `${r.requester}: ${r.requestedAmount}`,
      value: r.requestedAmount ? r.requestedAmount : 0, // even though we've checked for undefined, still have to put a default in
      color: colours[getRandomIndex(colours.length)].hexString,
    };
  });

  return (
    <div className={"requester"}>
      <h1 className={"requester__total"}>Total: {requestedAmount}</h1>
      <div className={"requester__pie"}>
        <PieChart data={requestData} />
      </div>
    </div>
  );
};

export default Requester;
