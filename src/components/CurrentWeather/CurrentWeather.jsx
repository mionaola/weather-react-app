import React from "react";
import { useEffect } from "react";
import { getCurrentWeatherData } from "../../functions/getCurrentWeatherData";
import { getImg } from "../../functions/getImg";
import Forecast from "../Forecast/Forecast";
import s from './CurrentWeather.module.css';


const CurrentWeather = (props) => {

    return (
        <div className={s.cw__container}>
            <div className={s.cw__filedsWrapper}>
                <div className={s.cw__city}>{props.currentWeather.name}</div>
                <div className={s.cw__iconTempWrapper}>
                    <div className={s.cw__iconWrapper}>
                        <img src={getImg(props.currentWeather.conditionId)} alt="weather condition" className={s.cw__icon} />
                    </div>
                    <div className={s.cw__temperature}>{props.currentWeather.temperature}</div>
                </div>
                <div className={s.cw__description}>{props.currentWeather.weatherDescription}</div>
                <div className={s.cw__features}>
                    <div className={s.cw__humidity}>{props.currentWeather.humidity}</div>
                    <div className={s.cw__feelsLike}>{props.currentWeather.feelsLike}</div>
                </div>
                <div className={s.cw__designCurveUp}></div>
            </div>
            <Forecast forecast={props.forecast} />
        </div>
    );
}

export default CurrentWeather;