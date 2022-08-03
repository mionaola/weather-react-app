let API_KEY = 'ae2966c0a0b7d46977a6d4bb8a16abe9'; //66cde197c321562574a04df97528ba2c ae2966c0a0b7d46977a6d4bb8a16abe9 d753ad5bbd35afaa552e6daf0e3312d1

export const fetchCurrentWeather = async (city) => {
    let currentWeatherLink = `https://api.openweathermap.org/data/2.5/weather?appid=${API_KEY}&units=metric`;
    return await (await fetch(`${currentWeatherLink}&q=${city}`)).json();
}

export const fetchForecast = async (city) => {
    let forecastLink = `http://api.openweathermap.org/data/2.5/forecast?appid=${API_KEY}&units=metric`;
    return await (await fetch(`${forecastLink}&q=${city}`)).json();
}