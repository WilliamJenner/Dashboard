import { BinLookup, Client } from "../client/client";

export const GetBins = (): Promise<BinLookup> => {
  return new Client("http://192.168.0.69:4433").bindicator();
};
