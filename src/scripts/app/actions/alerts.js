import { Client } from "../client/client";
export const getLatestAlerts = () => {
    try {
        return new Client("http://192.168.0.69:4433").getLatest();
    }
    catch (ex) {
        console.log(ex);
        throw ex;
    }
};
//# sourceMappingURL=alerts.js.map