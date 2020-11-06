import { api } from "../client/api";
import { Client, RequestDto } from "../client/client";

export const getRequiredAmount = (): Promise<number> => {
  return api().amount();
};

export const getActiveRequests = (): Promise<Array<RequestDto>> => {
  return api().activeamount();
};
