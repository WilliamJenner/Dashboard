import * as React from "react";
import { createContainer } from "unstated-next";
import { AppState as AppStateType } from "../types/config";

const useAppState = (
  initialState: AppStateType = {
    appState: {
      apiUrl: "",
      securityCamUrl: "",
      binNoticePeriod: 0,
    },
  }
) => {
  const [config, setConfig] = React.useState<AppStateType>(initialState);

  console.log(config);

  return {
    config,
    setConfig,
  };
};

export const AppState = createContainer(useAppState);
