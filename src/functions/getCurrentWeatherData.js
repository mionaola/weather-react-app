import { fetchCurrentWeather } from "../utils/api";

export const getCurrentWeatherData = async (city) => {

    const data = await fetchCurrentWeather(city);

    /* Object deconstruction to get variables instead of a big API respond */

    let {
        main: {
            temp,
            feels_like: feelsLikeTemp,
            humidity: humidityPercent,
        },

        weather: {
            [0]: condition,
            [0]: id,
        },

        name: cityName,
    } = data;

    let weatherDescription = condition.main;
    let conditionId = id.id;
    let temperature = `${Math.round(temp)}°C`;
    let feelsLike = `Feels like: ${Math.round(feelsLikeTemp)}°C`;
    let humidity = `Humidity: ${humidityPercent}%`;
    let name = cityName;

    let weatherObject = {
        weatherDescription,
        conditionId,
        temperature,
        feelsLike,
        humidity,
        name,
    }

    return weatherObject;
}
