import * as React from "react";
import { AppState } from "../../state/appState";

interface ISecurityCameraProps {}

export const SecurityCamera: React.FC<ISecurityCameraProps> = () => {
  const { appState } = AppState.useContainer();

  return appState === undefined ? null : (
    <img className={"security-camera"} src={appState.securityCamUrl} />
  );
};

export default SecurityCamera;
