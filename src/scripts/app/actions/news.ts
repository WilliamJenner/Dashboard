import { api } from "../client/api";
import { NewsMessage } from "../client/client";

export const getLatestAlerts = (): Promise<NewsMessage[]> => {
  try {
    return api().news();
  } catch (ex) {
    throw ex;
  }
};
