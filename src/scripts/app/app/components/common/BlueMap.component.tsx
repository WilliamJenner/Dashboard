import * as React from "react";
import { Spinner } from "react-bootstrap";
import { AppState } from "../../state/appState";
import IFrame from "./IFrame";

interface IBlueMapProps {}

export const BlueMap: React.SFC<IBlueMapProps> = () => {
  const { appState } = AppState.useContainer();

  return !appState ? (
    <p>Minecraft Map is not accessible.</p>
  ) : (
    <IFrame
      loadingElement={<Spinner animation="border" />}
      useLoadingWrapper={false}
      iframeClassName={"security-camera"}
      src={appState.blueMapUrl}
    />
  );
};

export default BlueMap;
