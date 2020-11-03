import { Client, RequestDto } from "../client/client";

export const getRequiredAmount = (): Promise<number> => {
  return new Client("http://192.168.0.69:4433").amount();
};

export const getActiveRequests = (): Promise<Array<RequestDto>> => {
  return new Client("http://192.168.0.69:4433").activeamount();
};
