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
  content: string;
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

  const frameRef = React.useRef<HTMLIFrameElement>(null);

  const checkError = () => {
    frameRef.current?.contentWindow?.document.body?.querySelector(".neterror")
      ? setError(true)
      : setError(false);
  };

  if (loading === true) {
    return <Spinner animation="border" />;
  }

  return !appState || error ? (
    <p>Security Camera is not accessible.</p>
  ) : (
    <iframe
      ref={frameRef}
      className={"security-camera"}
      src={appState.securityCamUrl}
      onLoad={(evt) => checkError()}
    />
  );
};

export default SecurityCamera;
