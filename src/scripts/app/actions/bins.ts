import { api } from "../client/api";
import { BinLookup, Client } from "../client/client";

export const GetBins = (): Promise<BinLookup> => {
  return api().bindicator();
};
