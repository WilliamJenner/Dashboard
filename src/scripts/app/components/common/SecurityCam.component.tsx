import { useInterval } from "../../hooks/useInterval";
import * as React from "react";
import { Spinner } from "react-bootstrap";
import { secondsToMilliseconds } from "../../../app/utils/number";
import { AppState } from "../../state/appState";
import useSetState from "react-use/lib/useSetState";

interface ISecurityCameraProps {}

interface ISecurityCameraState {
  loading: boolean;
  error: boolean;
}

export const SecurityCamera: React.FC<ISecurityCameraProps> = () => {
  const { appState } = AppState.useContainer();
  const [{ loading, error }, setState] = useSetState<ISecurityCameraState>();

  const setLoading = (loading: boolean) => setState({ loading: loading });
  const setError = (error: boolean) => setState({ error: error });

  useInterval(() => {
    setLoading(true);

    setTimeout(() => {
      setLoading(false);
    }, 1000);
  }, secondsToMilliseconds(30));

  if (loading === true) {
    return <Spinner animation="border" />;
  }

  return (!appState || error) ? (
    <p>Security Camera is not accessible.</p>
  ) : (
    <iframe
      className={"security-camera"}
      src={appState.securityCamUrl}
      onError={() => setError(true)}
    />
  );
};

export default SecurityCamera;
