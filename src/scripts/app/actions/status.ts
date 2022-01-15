import { api } from "../client/api"

export const GetStatus = async () => {
    const result = await api().status_GetStats();
    const processes = (await api().status_GetProcessInfo()).filter((_, i) => i < 10 )
    return {status: result[0], processes: processes};
}