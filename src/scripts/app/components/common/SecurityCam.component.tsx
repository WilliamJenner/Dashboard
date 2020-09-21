import * as React from "react";

interface ISecurityCameraProps {}

export const SecurityCamera: React.FC<ISecurityCameraProps> = () => {
  return (
    <img
    className={"security-camera"}
      src="http://192.168.0.74:8081/"
    />
  );
};
