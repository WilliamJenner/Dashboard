import { api } from "../client/api"

export const GetStatus = async () => {
    const result = await api().status_GetStats();
    return result[0];
}