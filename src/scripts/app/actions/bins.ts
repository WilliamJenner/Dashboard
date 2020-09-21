import { BinLookup, Client } from "../client/client";

export const GetBins = (): Promise<BinLookup> => {
  return new Client("https://localhost:44359").bindicator();
};
