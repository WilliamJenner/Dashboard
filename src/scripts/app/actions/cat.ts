import { api } from "../client/api";

export const GetCatUrl = (): Promise<string> => {
  return api().cat_RandomCatUrl();
};
