import React from "react";
import Ticker from "react-ticker";
import { GetLatestAlerts } from "../../actions/alerts";
import { Alert } from "../../client/client";
import { useInterval } from "../../hooks/useInterval";
import { minutesToMilliseconds } from "../../utils/number";

interface IAlertTicker {}

const AlertTicker: React.FC<IAlertTicker> = () => {
  const [alerts, setAlerts] = React.useState<Alert[]>([]);

  const getAndSetAlerts = () => {
    GetLatestAlerts().then((result) => {
      setAlerts(result);
    });
  };

  React.useEffect(() => {
    getAndSetAlerts();
  }, []);

  useInterval(() => {
    getAndSetAlerts();
  }, minutesToMilliseconds(1));

  console.log({ alerts });

  if (alerts === undefined || alerts.length === 0) {
    return null;
  }

  return (
    <div className="ticker">
      <Ticker>
        {({ index }) =>
          alerts.map((alert) => {
            return (
              <span className="ticker__content">
                <span className="ticker__content__bold">{alert.createdBy}</span>{" "}
                at {alert.dateCreated?.toLocaleString()}: {alert.message}
              </span>
            );
          })
        }
      </Ticker>
    </div>
  );
};

export default AlertTicker;
