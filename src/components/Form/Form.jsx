import React from "react";
import { getCurrentWeatherData } from "../../functions/getCurrentWeatherData";
import { getForecastData } from "../../functions/getForecastData";
import state from "../../redux/state";
import { rerenderTree } from "../../render";
import CurrentWeather from "../CurrentWeather/CurrentWeather";
import s from './Form.module.css';

const Form = (props) => {
    let [currentWeather, setCurrentWeather] = props.currentWeather;
    let [forecast, setForecast] = props.forecast;
    let [error, setError] = props.error;
    let [loaded, setLoaded] = props.loaded;

    let inputElement = React.createRef();

    let onInputChange = () => {
        let text = inputElement.current.value;
        props.updateInputText(text);
    }

    let fetchData = async () => {
        try {
            let currentWeatherData = await getCurrentWeatherData(props.inputText);
            let forecastData = await getForecastData(props.inputText);
            setCurrentWeather(currentWeatherData);
            setForecast(forecastData);
        } catch (error) {
            setError(error.message);
            alert('Couldn\'t find the city you entered. It\'s either a mistype or we don\'t have this city in our database. Please, try again.')
        }
        setLoaded(true);
    }

    const handleClick = async () => {
        await fetchData();
        props.clearInput();
    }

    const onKeyPressHandler = (event) => {
        if (event.key === 'Enter') {
            handleClick();
        }

    }

    return (
        <>
            <div className={s.form__wrapper}>
                <div className={s.form} id="form">
                    <input
                        onKeyPress={onKeyPressHandler}
                        onChange={onInputChange}
                        ref={inputElement}
                        type="text"
                        className={s.form__input}
                        placeholder="Enter a city..."
                        value={props.inputText}
                    />
                    <button
                        onClick={handleClick}
                        className={s.form__submitBtn}
                        type="submit"
                        form="form"
                    >
                        SHOW ME
                    </button>
                </div>
            </div>
            <CurrentWeather
                currentWeather={currentWeather}
                forecast={forecast}
            />
        </>
    );
}

export default Form;