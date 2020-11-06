import dayjs from "dayjs";
import React from "react";
import { Row, Table } from "react-bootstrap";
import Ticker from "react-ticker";
import { getLatestAlerts } from "../../actions/alerts";
import { Alert } from "../../client/client";
import { useInterval } from "../../hooks/useInterval";
import { minutesToMilliseconds } from "../../utils/number";
import { capitaliseFirst } from "../../utils/string";

interface IAlertTicker {}

interface IAlert {
  alert: Alert;
}

const AlertMessage: React.FC<IAlert> = ({ alert }) => {
  const { message, createdBy, dateCreated } = alert;

  return (
    <div className={"ticker__content"}>
      <div>{message}</div>
      <div className={"ticker__content__author"}>
        Sent by {capitaliseFirst(createdBy as string)}{" "}
        <span className={"ticker__content__author--time"}>
          {dayjs(dateCreated).format("YYYY-MM-DD HH:mm")}
        </span>
      </div>
    </div>
  );
};

const AlertTicker: React.FC<IAlertTicker> = () => {
  const [alerts, setAlerts] = React.useState<Alert[]>([]);

  const getAndSetAlerts = () => {
    getLatestAlerts().then((result) => {
      setAlerts(result);
    });
  };

  React.useEffect(() => {
    getAndSetAlerts();
  }, []);

  useInterval(() => {
    getAndSetAlerts();
  }, minutesToMilliseconds(0.2));

  if (alerts === undefined || alerts.length === 0) {
    return null;
  }

  return (
    <div className="ticker">
      <Ticker>
        {({ index }) =>
          alerts.map((alert) => {
            return <AlertMessage alert={alert} />;
          })
        }
      </Ticker>
    </div>
  );
};

export default AlertTicker;
