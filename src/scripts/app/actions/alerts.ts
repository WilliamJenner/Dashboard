import { api } from "../client/api";
import { Alert, Client } from "../client/client";

export const getLatestAlerts = (): Promise<Alert[]> => {
  try {
    return api().getLatest();
  } catch (ex) {
    throw ex;
  }
};
