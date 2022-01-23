import { useInterval } from "../../hooks/useInterval";
import * as React from "react";
import { Spinner } from "react-bootstrap";
import { secondsToMilliseconds } from "../../utils/number";
import { AppState } from "../../state/appState";

interface IBlueMapProps {}

export const BlueMap : React.FC<IBlueMapProps> = () => {
  const { appState } = AppState.useContainer();
  const [loading, setLoading] = React.useState<boolean>(false);

  useInterval(() => {
    setLoading(true);

    setTimeout(() => {
      setLoading(false);
    }, 1000);
  }, secondsToMilliseconds(240));

  if (loading === true) {
    return <Spinner animation="border" />;
  }

  return appState === undefined ? null : (
    <iframe className={"security-camera"} src={appState.blueMapUrl} />
  );
};

export default BlueMap;
