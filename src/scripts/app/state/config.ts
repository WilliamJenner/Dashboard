import * as React from "react";
import { createContainer } from "unstated-next";
import { IConfig } from "../types/config";

const defaultConfig: IConfig = {
  appState: {
    apiUrl: "",
    securityCamUrl: "",
  },
};

function useConfig() {
  const [config, setConfig] = React.useState<IConfig>(defaultConfig);

  return {
    config,
    setConfig,
  };
}

export default createContainer(useConfig);
