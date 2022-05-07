import { useInterval } from "../../hooks/useInterval";
import * as React from "react";
import { Spinner } from "react-bootstrap";
import { secondsToMilliseconds } from "../../../app/utils/number";
import { AppState } from "../../state/appState";
import useSetState from "react-use/lib/useSetState";
import IFrame from "./IFrame";
import useEffectOnce from "react-use/lib/useEffectOnce";
import useComponentRefresh from "app/hooks/useComponentRefresh";

interface ISecurityCameraProps {}

interface ISecurityCameraState {
  loading: boolean;
  error: boolean;
  content: string;
}

export const SecurityCamera: React.FC<ISecurityCameraProps> = () => {
  const { appState } = AppState.useContainer();
  const [{ loading, error }, setState] = useSetState<ISecurityCameraState>();

  const setLoading = React.useCallback(
    (loading: boolean) => setState({ loading: loading }),
    [loading]
  );

  const setError = React.useCallback(
    (err: boolean) => setState({ error: err }),
    [error]
  );

  useComponentRefresh(appState.securityCamUrl, setLoading, setError);

  if (loading === true) {
    return <Spinner animation="border" />;
  }

  return !appState || error ? (
    <p>Security Camera is not accessible...</p>
  ) : (
    <IFrame
      loadingElement={<Spinner animation="border" />}
      useLoadingWrapper={false}
      iframeClassName={"security-camera"}
      src={appState.securityCamUrl}
    />
  );
};

export default SecurityCamera;
