import moment from 'moment';
import { fetchWeather, fetchForecast } from '../api/fetchWeather';

export const errorHandler = (err: any) => {
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

export const makeDaysObject = (forecast: Forecast) => {
    const daysObj: any = {};
    const dayArray = forecast.list.map(item => ({ ...item, date: moment(item.dt_txt).format('dddd, HH:mm') }));
    dayArray.forEach(elem => {
        const weekDay = elem.date.split(',')[0] 
        if(daysObj[weekDay]){
            daysObj[weekDay] = [...daysObj[weekDay], elem] 
        }
        else{
            daysObj[weekDay] = [elem]
        }
    });
    return daysObj
}

export const makeDaysArray = (daysObj: any) => {
    const daysArray: any = []
    for(const [key, value] of Object.entries(daysObj)){
        daysArray.push([key, value]);
    }
    return daysArray
}

export const getGeolocation = (setLocation: React.Dispatch<React.SetStateAction<{lat: number;long: number;}>>) => {
    const options = { enableHighAccuracy: true, timeout: 5000, maximumAge: 0 };

    const success = (pos: GeolocationPosition) => {
        const { latitude, longitude } = pos.coords;
        setLocation({ lat: latitude, long: longitude });
    }  

    navigator.geolocation.getCurrentPosition(pos => success(pos), (err: any) => console.log(err), options);
}

export const getWeather = async(setWeather: Function, setForecast: Function, city: string, setCity: Function, setLoading: Function) => {

    const weather = await fetchWeather(city);
    const forecast = await fetchForecast(city);

    if(weather){
        setWeather(weather);
    }
    if(forecast){
        setForecast(forecast);
    }
        
    setLoading(false);
    setCity('');
}

