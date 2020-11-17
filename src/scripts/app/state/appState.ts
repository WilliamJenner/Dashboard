import * as React from "react";
import { createContainer } from "unstated-next";
import { AppState as AppStateType } from "../types/config";

const useAppState = (
  initialState: AppStateType = {
    apiUrl: "",
    securityCamUrl: "",
    binNoticePeriod: 0,
  }
) => {
  const [appState, setAppState] = React.useState<AppStateType>(initialState);

  return {
    appState: appState,
    setAppState,
  };
};

export const AppState = createContainer(useAppState);
