import { useInterval } from "../../hooks/useInterval";
import * as React from "react";
import { Spinner } from "react-bootstrap";
import useSetState from "react-use/lib/useSetState";
import { minutesToMilliseconds } from "../../../../scripts/app/utils/number";
import { AppState } from "../../state/appState";
import IFrame from "./IFrame";

interface IBlueMapProps {}

interface IBlueMapState {
  loading: boolean;
  error: boolean;
}

export const BlueMap: React.FC<IBlueMapProps> = () => {
  const { appState } = AppState.useContainer();
  const [{ loading, error }, setState] = useSetState<IBlueMapState>();

  const setLoading = (loading: boolean) => setState({ loading: loading });

  useInterval(() => {
    setLoading(true);

    setTimeout(() => {
      setLoading(false);
    }, 1000);
  }, minutesToMilliseconds(60));

  if (loading === true) {
    return <Spinner animation="border" />;
  }

  return !appState || error ? (
    <p>Minecraft Map is not accessible.</p>
  ) : (
    <IFrame
      loadingElement={<Spinner animation="border" />}
      useLoadingWrapper={true}
      iframeClassName={"security-camera"}
      src={appState.blueMapUrl}
    />
  );
};

export default BlueMap;
