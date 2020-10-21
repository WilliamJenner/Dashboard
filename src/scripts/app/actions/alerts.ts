import { Alert, Client } from "../client/client";

export const GetLatestAlerts = (): Promise<Alert[]> => {
  try {
    return new Client("http://192.168.0.69:4433").getLatest();
  } catch (ex) {
    console.log(ex);
    throw ex;
  }
};
