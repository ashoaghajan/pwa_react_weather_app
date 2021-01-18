import React from 'react';
import { makeDaysObject, makeDaysArray } from '../global/globalFunctions';
import DayForecast from './DayForecast';

export interface ForecastProps {
    forecast: Forecast
}
 
const Forecast: React.SFC<ForecastProps> = ({ forecast }) => {

    const forecastObj = makeDaysObject(forecast);
    const forecastArray = makeDaysArray(forecastObj); 

    console.log(forecastArray)

    return ( 
        <div className="forecast">
            <h2 className='forecast-city-name'>
                <span>{forecast.city.name}</span>
                <sup>{forecast.city.country}</sup>
            </h2>
            <div className="forecast">
                {forecastArray.length && forecastArray.map((item: any) => (
                    <div key={item[0]} className='forecast-day'>
                        {item[1].map((elem: ForecastItem) => <DayForecast key={elem.date} forecastItem={elem}/>)}
                    </div>
                ))}
            </div>
        </div>
     );
}
 
export default Forecast;
