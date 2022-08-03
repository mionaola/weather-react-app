/*Function to get an object key, that includes the weather condition code the API has returned*/

export const findByKey = (code, weatherConditions) => {
    return Object.keys(weatherConditions).find((key) => {
        return weatherConditions[key].includes(code);
    })
}