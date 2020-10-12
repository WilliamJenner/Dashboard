import * as React from "react";
import { createContainer } from "unstated-next";
const defaultConfig = {
    appState: {
        apiUrl: "",
        securityCamUrl: "",
    },
};
function useConfig() {
    const [config, setConfig] = React.useState(defaultConfig);
    return {
        config,
        setConfig,
    };
}
export default createContainer(useConfig);
//# sourceMappingURL=config.js.map