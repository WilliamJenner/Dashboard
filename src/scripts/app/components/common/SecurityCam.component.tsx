import { useInterval } from "@hooks/useInterval";
import * as React from "react";
import { Spinner } from "react-bootstrap";
import { secondsToMilliseconds } from "../../../app/utils/number";
import { AppState } from "../../state/appState";

interface ISecurityCameraProps {}

export const SecurityCamera: React.FC<ISecurityCameraProps> = () => {
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

  return appState === undefined ? null : (
    <iframe className={"security-camera"} src={appState.securityCamUrl} />
  );
};

export default SecurityCamera;
