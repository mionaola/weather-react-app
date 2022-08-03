import { fetchForecast } from "../utils/api"
import { getForecastList } from "./getForecastList";

/* This function will be removed soon */

export const getForecastData = async (city) => {
    const data = await fetchForecast(city);

    let {
        list,
    } = data;

    return getForecastList(list);
}