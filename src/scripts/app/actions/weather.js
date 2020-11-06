import { api } from "../client/api";
export const getWeather = () => {
    try {
        return api().weatherForecast();
    }
    catch (ex) {
        console.log(ex);
        throw ex;
    }
};
//# sourceMappingURL=weather.js.map