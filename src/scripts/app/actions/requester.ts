import { Client, RequestDto } from "../client/client";

export const getRequiredAmount = (): Promise<number> => {
  return new Client("https://localhost:44359").amount();
};

export const getActiveRequests = (): Promise<Array<RequestDto>> => {
  return new Client("https://localhost:44359").activeamount();
};
