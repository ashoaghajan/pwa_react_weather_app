import axios from 'axios';
import { WEATHER_URL, API_KEY } from '../global/globalVariables';


export const fetchWeather = async(town: string) => {
    try{
        const { data } = await axios.get(WEATHER_URL, {
            params: { q: town, units: 'metric', APPID: API_KEY }
        });
    
        return data
    }
    catch(err){
        if(err.message.includes('404')){
            alert('You have probably entered an invalid city name')
        }
        else if(err.message.includes('401')){
            alert('Your API key is probably invalid.')
        }
        else{
            console.log(err)
        }
    }
}