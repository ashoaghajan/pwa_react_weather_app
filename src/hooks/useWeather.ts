import { useState, useEffect } from 'react';
import { initWeather, initForecast } from '../global/globalVariables';
import { fetchCityName } from '../api/fetchWeather';
import { getGeolocation, getWeather } from '../global/globalFunctions';

export const useWeather = () => {

    const [city, setCity] = useState('');
    const [weather, setWeather] = useState(initWeather);
    const [forecast, setForecast] = useState(initForecast);

    const [location, setLocation] = useState({ lat: 0, long: 0 });
    const [currentCity, setCurrentCity] = useState('');
    const [loading, setLoading] = useState(false);


    useEffect(() => {
      getGeolocation(setLocation);
    },[]);

    useEffect(() => {
      const getCityName = async() => {
        const data = await fetchCityName(location.lat, location.long);
        setCurrentCity(data.city)
      }
      if(location.lat && location.long){
        getCityName();
      }
    },[location]);

    useEffect(() => {
      if(currentCity){
        setLoading(true);
        getWeather(setWeather, setForecast, currentCity, setCity, setLoading);
      }
      // eslint-disable-next-line
    },[currentCity]);

  
    const search = async(e: React.KeyboardEvent<HTMLInputElement>) => {
      if(e.key === 'Enter' && city){
        setLoading(true);
        getWeather(setWeather, setForecast, city, setCity, setLoading);
      }
    }

    return { city, weather, forecast, loading, setCity, search }
}