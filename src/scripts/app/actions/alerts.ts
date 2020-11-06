import { Alert, Client } from "../client/client";

export const getLatestAlerts = (): Promise<Alert[]> => {
  try {
    return new Client("http://192.168.0.69:4433").getLatest();
  } catch (ex) {
    throw ex;
  }
};
