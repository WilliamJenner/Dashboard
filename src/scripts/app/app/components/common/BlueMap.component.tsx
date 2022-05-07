import useComponentRefresh from "app/hooks/useComponentRefresh";
import { secondsToMilliseconds } from "app/utils/number";
import * as React from "react";
import { Spinner } from "react-bootstrap";
import { useEffectOnce, useInterval, useSetState } from "react-use";
import { AppState } from "../../state/appState";
import IFrame from "./IFrame";

interface IBlueMapProps {}

interface IBlueMapState {
  error: boolean;
  loading: boolean;
}

export const BlueMap: React.SFC<IBlueMapProps> = () => {
  const { appState } = AppState.useContainer();
  const [{ loading, error }, setState] = useSetState<IBlueMapState>();
  const setLoading = React.useCallback(
    (loading: boolean) => setState({ loading: loading }),
    [loading]
  );

  const setError = React.useCallback(
    (err: boolean) => setState({ error: err }),
    [error]
  );

  useComponentRefresh(appState.blueMapUrl, setLoading, setError);
  if (loading === true) {
    return <Spinner animation="border" />;
  }

  return !appState || error ? (
    <p>Minecraft Map is not accessible...</p>
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
