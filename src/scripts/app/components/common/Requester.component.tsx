import React from "react";
import { getActiveRequests, getRequiredAmount } from "../../actions/requester";
import { hoursToMilliseconds, minutesToMilliseconds } from "../../utils/number";
import { useInterval } from "../../hooks/useInterval";
import { RequestDto } from "../../client/client";
import Ticker from "react-ticker";
import { capitaliseFirst } from "../../utils/string";
import dayjs from "dayjs";

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
      setRequests(result)
    })
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

  return (
    <div className={"requester"}>
      <div className={"requester__text"}>
        <h2>Amount Required:</h2>
        <h1 className={"requester__amount"}>{requestedAmount}</h1>
      </div>
      <div className={"requester__requesters"}> 
        <Ticker> 
          {
            ({index}) => requests.map(request => {
              return <RequestMessage request={request}/>
            })
          }
        </Ticker>
      </div>
    </div>
  );
};

export default Requester;
