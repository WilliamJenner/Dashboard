import { Client } from "../client/client";
export const GetLatestAlerts = () => {
    try {
        return new Client("https://localhost:44359").getLatest();
    }
    catch (ex) {
        console.log(ex);
        throw ex;
    }
};
//# sourceMappingURL=alerts.js.map