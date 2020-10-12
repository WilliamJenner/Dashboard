import { BinLookup, Client } from "../client/client";

export const GetBins = (): Promise<BinLookup> => {
  return new Client("https://192.168.0.69:42069/").bindicator();
};
