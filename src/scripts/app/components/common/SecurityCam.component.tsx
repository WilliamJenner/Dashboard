import * as React from "react";
import { AppState } from "../../state/appState";

interface ISecurityCameraProps {}

export const SecurityCamera: React.FC<ISecurityCameraProps> = () => {
  const { config } = AppState.useContainer();

  return (
    <img
      className={"security-camera"}
      src={
        config.appState
          ? config.appState.securityCamUrl
          : "http://192.168.0.70:8081"
      }
    />
  );
};

export default SecurityCamera;
