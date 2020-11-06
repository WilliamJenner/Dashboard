import { Client } from "../client/client";
export const getRequiredAmount = () => {
    return new Client("http://192.168.0.69:4433").amount();
};
export const getActiveRequests = () => {
    return new Client("http://192.168.0.69:4433").activeamount();
};
//# sourceMappingURL=requester.js.map