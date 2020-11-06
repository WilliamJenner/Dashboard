import { api } from "../client/api";
export const getRequiredAmount = () => {
    return api().amount();
};
export const getActiveRequests = () => {
    return api().activeamount();
};
//# sourceMappingURL=requester.js.map