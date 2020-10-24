import { Client, OpenWeatherCurrent } from "../client/client";

export const getWeather = (): Promise<OpenWeatherCurrent> => {
  try {
    //  return new Client("https://localhost:44359").weatherForecast();
    return new Client("http://192.168.0.69:4433").weatherForecast();
  } catch (ex) {
    console.log(ex);
    throw ex;
  }
};
