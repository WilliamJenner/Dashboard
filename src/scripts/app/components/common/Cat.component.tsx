import { useInterval } from "../../hooks/useInterval";
import * as React from "react";
import { Spinner } from "react-bootstrap";
import { secondsToMilliseconds } from "../../../app/utils/number";
import { AppState } from "../../state/appState";

interface ICatProps {}

export const Cat: React.FC<ICatProps> = () => {
  const { appState } = AppState.useContainer();
  const [loading, setLoading] = React.useState<boolean>(false);

  useInterval(() => {
    setLoading(true);

    setTimeout(() => {
      setLoading(false);
    }, 1000);
  }, secondsToMilliseconds(30));

  if (loading === true) {
    return <Spinner animation="border" />;
  }

  return (
    <img src="https://cataas.com/cat/gif" alt="https://cataas.com/cat/gif" />
  );
};

export default Cat;
