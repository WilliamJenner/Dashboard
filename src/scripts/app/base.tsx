import * as React from "react";
import App from "./app";
import Config from "./state/config";

const Base: React.FC = () => {
  return (
    <React.Fragment>
      <Config.Provider>
        <App />
      </Config.Provider>
    </React.Fragment>
  );
};

export default Base;
