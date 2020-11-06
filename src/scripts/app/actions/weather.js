import { Client } from "../client/client";
export const getWeather = () => {
    try {
        return new Client("http://192.168.0.69:4433").weatherForecast();
    }
    catch (ex) {
        console.log(ex);
        throw ex;
    }
};
//# sourceMappingURL=weather.js.map