import * as SignalR from "@microsoft/signalr";
import { WallboardInfo } from "../client/client";

export type AppState = {
  apiUrl: string;
  securityCamUrl: string;
  blueMapUrl: string;
  binNoticePeriod: number;
  wallboardInfo?: WallboardInfo;
  connection: SignalR.HubConnection;
};
