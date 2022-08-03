import { findByKey } from "./findByKey";

const weatherConditions = {
    rainy: [300, 301, 302, 310, 311, 312, 313, 314, 321, 500, 501, 502, 503, 504, 511, 520, 521, 522, 531, 701],
    snowy: [600, 601, 602, 611, 612, 613, 615, 616, 620, 621, 622],
    sunny: [800],
    partlyCloudy: [801, 802],
    cloudy: [803, 804],
    foggy: [741, 711, 701, 721, 731, 751, 761, 762, 771, 781],
    storm: [200, 201, 202],
    thunder: [210, 211, 212, 221, 230, 231, 232],
};

/* Get a weather condition img depending on weather condition ID */

export const getImg = (key) => {
    let imgSrc;
    switch (findByKey(key, weatherConditions)) {

        case 'rainy':
            imgSrc = 'img/rain.png';
            break;
        case 'snowy':
            imgSrc = 'img/snow.png';
            break;
        case 'sunny':
            imgSrc = 'img/sun.png';
            break;
        case 'partlyCloudy':
            imgSrc = 'img/partly-cloudy.png';
            break;
        case 'cloudy':
            imgSrc = 'img/clouds.png';
            break;
        case 'foggy':
            imgSrc = 'img/fog.png';
            break;
        case 'storm':
            imgSrc = 'img/storm.png';
            break;
        case 'thunder':
            imgSrc = 'img/thunder.png';
            break;
        default:
            imgSrc = 'img/weather-news.png';
            break;
    }

    return imgSrc;
}

