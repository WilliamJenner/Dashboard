import { Client } from "./client";
export const api = () => {
    var _a;
    return new Client(JSON.parse((_a = document.getElementById("config")) === null || _a === void 0 ? void 0 : _a.innerHTML).apiUrl);
};
//# sourceMappingURL=api.js.map