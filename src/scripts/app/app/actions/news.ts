import { api } from "../client/api";
import { NewsMessage } from "../client/client";

export const getLatestAlerts = (): Promise<NewsMessage[]> =>
  api().news_GetNews();
