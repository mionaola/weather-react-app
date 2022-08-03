import React from "react";
import { getImg } from "../../../functions/getImg";
import s from './ForecastItem.module.css';

const ForecastItem = (props) => {

    return (
        <div className={s.fi__wrapper}>
            <div className={s.fi__date}>{props.day}/{props.month}</div>
            <div className={s.fi__imgWrapper}>
                <img src={getImg(props.conditionId)} alt="Weather" className={s.fi__img} />
            </div>
            <div className={s.fi__temp}>{Math.round(props.temperature)}°C</div>
            <div className={s.fi__desc}>{props.weatherDescription}</div>
        </div>
    );
}

export default ForecastItem;