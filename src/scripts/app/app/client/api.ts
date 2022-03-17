import { AppState as AppStateType } from "../types/config";
import { Client } from "./client";
declare let window: any;
export const api = () => {
  const config = window.appState as AppStateType;
  return new Client(config.apiUrl); // this is gross and I need to find a better way to pass this value in

  // .... but it does work
};
