import { useInterval } from "../../hooks/useInterval";
import * as React from "react";
import { Spinner } from "react-bootstrap";
import useSetState from "react-use/lib/useSetState";
import { secondsToMilliseconds } from "../../../../scripts/app/utils/number";
import { AppState } from "../../state/appState";

interface IBlueMapProps {}

interface IBlueMapState {
  loading: boolean;
  error: boolean;
}

export const BlueMap: React.FC<IBlueMapProps> = () => {
  const { appState } = AppState.useContainer();
  const [{ loading, error }, setState] = useSetState<IBlueMapState>();

  const setLoading = (loading: boolean) => setState({ loading: loading });
  const setError = (error: boolean) => setState({ error: error });

  React.useEffect(() => {
    if (error) {
      useInterval(() => {
        setLoading(true);

        setTimeout(() => {
          setLoading(false);
        }, 1000);
      }, secondsToMilliseconds(30));
    }
  }, [error, loading]);

  if (loading === true) {
    return <Spinner animation="border" />;
  }

  return (!appState || error) ? (
    <p>Minecraft Map is not accessible.</p>
  ) : (
    <iframe
      className={"security-camera"}
      src={appState.blueMapUrl}
      onError={() => setError(true)}
    />
  );
};

export default BlueMap;
