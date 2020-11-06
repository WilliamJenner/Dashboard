import * as React from "react";
import { AppState } from "../../state/config";
export const SecurityCamera = () => {
    const { config } = AppState.useContainer();
    return (React.createElement("img", { className: "security-camera", src: config.appState
            ? config.appState.securityCamUrl
            : "http://192.168.0.70:8081" }));
};
export default SecurityCamera;
//# sourceMappingURL=SecurityCam.component.js.map