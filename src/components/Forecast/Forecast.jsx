import React from "react";
import { useEffect } from "react";
import { getForecastData } from "../../functions/getForecastData";
import s from './Forecast.module.css';
import ForecastItem from "./ForecastItem/Forecastitem";

const Forecast = (props) => {

    return (
        <div className={s.forecast__wrapper}>
            <div className={s.forecast__designCurveDown}></div>
            <div className={s.forecast__items}>
                {props.forecast.map((item, index) => (
                    <ForecastItem
                        key={index}
                        temperature={item.main.temp}
                        day={item.day}
                        month={item.month}
                        conditionId={item.weather[0].id}
                        weatherDescription={item.weather[0].main}
                    />
                ))}
            </div>
        </div>
    );
}

export default Forecast;
