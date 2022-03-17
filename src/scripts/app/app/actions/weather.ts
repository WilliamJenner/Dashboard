import { api } from "../client/api";
import { OpenWeatherCurrent } from "../client/client";

export const getWeather = (): Promise<OpenWeatherCurrent> => {
  try {
    return api().weatherForecast_Get();
  } catch (ex) {
    console.log(ex);
    throw ex;
  }
};
