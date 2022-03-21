import * as React from "react";
import useSetState from "react-use/lib/useSetState";
import * as SignalR from "@microsoft/signalr";
import { createContainer } from "unstated-next";
import { AppState as AppStateType } from "../types/config";
import { WallboardInfo } from "../client/client";
import { useEffectOnce } from "react-use";

declare let window: any;
const config = window.appState as AppStateType;
const connection = new SignalR.HubConnectionBuilder()
  .withUrl(`${config.apiUrl}/app-hub`)
  .configureLogging(SignalR.LogLevel.Information)
  .withAutomaticReconnect()
  .build();

const useAppState = () => {
  const startSignalR = React.useCallback(() => {
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
  }, [connection]);
  config.connection = startSignalR();
  config.wallboardInfo = undefined;
  const [appState, setAppState] = useSetState<AppStateType>(config);
  const [wallboardInfo, setWallboardInfo] = useSetState<WallboardInfo>();

  useEffectOnce(() => {
    appState.connection &&
      appState.connection!.on("Broadcast", (info: WallboardInfo) => {
        setWallboardInfo(info);
      });
    return () => appState.connection?.off("Broadcast");
  });

  return {
    appState: appState,
    setAppState,
    wallboardInfo,
  };
};

export const AppState = createContainer(useAppState);
