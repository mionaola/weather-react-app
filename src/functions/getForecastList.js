export const getForecastList = (arr) => {
    /* debugger; */
    let forecastArr = [];
    for (let i = 0; i < arr.length; i++) {
        let days = new Date(arr[i].dt * 1000);
        if (days.getHours() == 15) {
            arr[i].day = days.getDate();
            arr[i].month = days.getMonth() + 1;

            /* The lines abouve return an integer. If it's a single digit return, then we need to add 0 in front of it to make the date look better and easier to read.
            The code below does it. */

            if (arr[i].day.toString().length === 1 && arr[i].month.toString().length === 1) {
                arr[i].day = `0${arr[i].day}`;
                arr[i].month = `0${arr[i].month}`;
            } else if (arr[i].day.toString().length === 1) {
                arr[i].day = `0${arr[i].day}`;
            } else if (arr[i].month.toString().length === 1) {
                arr[i].month = `0${arr[i].month}`;
            }
            forecastArr.push(arr[i]);
        }
    }
    forecastArr.shift(arr);
    return forecastArr;
}