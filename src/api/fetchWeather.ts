import axios from 'axios';
import { API_KEY, WEATHER_URL, FORECAST_URL, geocodeToCity } from '../global/globalVariables';
import { errorHandler } from '../global/globalFunctions';


export const fetchWeather = async(town: string) => {
    try{
        const { data } = await axios.get(WEATHER_URL, {
            params: { q: town, units: 'metric', appid: API_KEY }
        });
        return data
    }
    catch(err){
        errorHandler(err)
    }
}


export const fetchForecast = async(town: string) => {
    try{
        const { data } = await axios.get(FORECAST_URL, {
            params: { q: town, units: 'metric', appid: API_KEY }
        });
        return data
    }
    catch(err){
        console.log(err.message)
    }
}

export const fetchCityName = async(lat: number, long: number) => {
    try{
        const { data } = await axios.get(geocodeToCity + `?latitude=${lat}&longitude=${long}&localityLanguage=en`);
        return data
    }
    catch(err){
        console.log(err.message)
    }
}
