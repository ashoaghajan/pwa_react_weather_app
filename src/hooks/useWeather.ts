import { useState } from 'react';
import { initWeather, initForecast } from '../global/globalVariables';
import { fetchWeather, fetchForecast } from '../api/fetchWeather';

export const useWeather = () => {
    const [city, setCity] = useState('');
    const [weather, setWeather] = useState(initWeather);
    const [forecast, setForecast] = useState(initForecast)
  
    const search = async(e: React.KeyboardEvent<HTMLInputElement>) => {
      if(e.key === 'Enter' && city){
        const weather = await fetchWeather(city);
        const forecast = await fetchForecast(city);

        if(weather){
          setWeather(weather);
        }
        if(forecast){
            setForecast(forecast);
          }
          
        setCity('');
      }
    }

    return { city, weather, forecast, setCity, search }
}