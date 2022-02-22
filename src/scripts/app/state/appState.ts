import * as React from "react";
import useSetState from "react-use/lib/useSetState";
import * as SignalR from "@microsoft/signalr";
import { createContainer } from "unstated-next";
import { AppState as AppStateType } from "../types/config";
import { WallboardInfo } from "../client/client";
const config: AppStateType = JSON.parse(
  document.getElementById("config")?.innerHTML!
);
const connection = new SignalR.HubConnectionBuilder()
  .withUrl(`${config.apiUrl}/app-hub`)
  .configureLogging(SignalR.LogLevel.Information)
  .withAutomaticReconnect()
  .build();

const useAppState = () => {
  const startSignalR = () => {
    async function start() {
      try {
        await connection.start();
        console.log("SignalR Connected.");
      } catch (err) {
        console.log(`SignalR Connection Error: ${JSON.stringify(err)}`);
        setTimeout(start, 5000);
      }
    }

    connection.state === SignalR.HubConnectionState.Disconnected &&
      (async () => await start())();

    return connection;
  };
  config.connection = startSignalR();
  config.wallboardInfo = undefined;
  const [appState, setAppState] = useSetState<AppStateType>(config);

  return {
    appState: appState,
    setAppState,
  };
};

export const AppState = createContainer(useAppState);
