import * as React from "react";
import App from "./app";
import Config from "./state/config";
const Base = () => {
    return (React.createElement(React.Fragment, null,
        React.createElement(Config.Provider, null,
            React.createElement(App, null))));
};
export default Base;
//# sourceMappingURL=base.js.map