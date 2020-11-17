import { AppState } from "../state/appState";
import { Client } from "./client";

export const api = () => {
  return new Client(
    JSON.parse(document.getElementById("config")?.innerHTML!).apiUrl
  ); // this is gross and I need to find a better way to pass this value in

  // .... but it does work
};
