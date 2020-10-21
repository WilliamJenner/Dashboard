import { Client } from "../client/client";

export const getRequiredAmount = (): Promise<number> => {
  return new Client("http://192.168.0.69:4433").amount();
};
