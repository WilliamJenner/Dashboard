import { api } from "../client/api";
export const getLatestAlerts = () => {
    try {
        return api().getLatest();
    }
    catch (ex) {
        throw ex;
    }
};
//# sourceMappingURL=alerts.js.map