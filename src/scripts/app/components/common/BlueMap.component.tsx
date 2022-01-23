import { useInterval } from "../../hooks/useInterval";
import * as React from "react";
import { Spinner } from "react-bootstrap";
import { secondsToMilliseconds } from "../../utils/number";
import { AppState } from "../../state/appState";

interface IBlueMapProps {}

export const BlueMap : React.FC<IBlueMapProps> = () => {
  const { appState } = AppState.useContainer();

  return appState === undefined ? null : (
    <iframe className={"security-camera"} src={appState.blueMapUrl} />
  );
};

export default BlueMap;
