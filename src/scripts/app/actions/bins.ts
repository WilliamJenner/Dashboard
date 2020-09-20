import { BinLookup, Client } from "../client/client";

export const GetBins = (): Promise<BinLookup> => {
  return new Client().bindicator();
};
