import * as React from "react";
import ConfigContainer from "../../state/config";
export const SecurityCamera = () => {
    const { config } = ConfigContainer.useContainer();
    return (React.createElement("img", { className: "security-camera", src: config.appState
            ? config.appState.securityCamUrl
            : "http://192.168.0.70:8081" }));
};
//# sourceMappingURL=SecurityCam.component.js.map