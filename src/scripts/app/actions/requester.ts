import { RequesterLookup, Client } from "../client/client";

export const GetRequiredAmount = (): Promise<number> => {
  return new Client("http://192.168.0.69:4433").requiredAmount();
};
