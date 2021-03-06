import { api } from "../client/api";
import { Client, OpenWeatherCurrent } from "../client/client";

export const getWeather = (): Promise<OpenWeatherCurrent> => {
  try {
    return api().weatherForecast();
  } catch (ex) {
    console.log(ex);
    throw ex;
  }
};
