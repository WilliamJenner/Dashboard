import * as React from "react";
import { createContainer } from "unstated-next";
const defaultConfig = {
    appState: {
        apiUrl: "",
        securityCamUrl: "",
    },
};
function useAppState() {
    const [config, setConfig] = React.useState(defaultConfig);
    return {
        config,
        setConfig,
    };
}
export const AppState = createContainer(useAppState);
//# sourceMappingURL=config.js.map