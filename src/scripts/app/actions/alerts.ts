import { Alert, Client } from "../client/client";

export const getLatestAlerts = (): Promise<Alert[]> => {
  try {
    return new Client("https://localhost:44359").getLatest();
  } catch (ex) {
    console.log(ex);
    throw ex;
  }
};
