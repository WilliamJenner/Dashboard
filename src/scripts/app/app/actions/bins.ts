import { api } from "../client/api";
import { BinLookup } from "../client/client";

export const GetBins = (): Promise<BinLookup> => {
  return api().bindicator_Get();
};
