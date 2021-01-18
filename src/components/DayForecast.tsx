import React from 'react';
import { iconLink } from '../global/globalVariables';

export interface DayForecastProps {
    forecastItem: ForecastItem
}
 
const DayForecast: React.SFC<DayForecastProps> = ({ forecastItem: item }) => {
    
    const [day, time] = item.date.split(',');

    return ( 
        <div className="forecast-item">
            <div className="weekday">
                {day.substr(0,3)}
            </div>
            <div className="weekday">
                {time}
            </div>
            <div className="forecast-temp">
                {Math.round(item.main.temp)}
                <sup>&deg;C</sup>
            </div>
            <div className="forecast-info">
                <img src={`${iconLink}/${item.weather[0].icon}@2x.png`} alt={item.weather[0].description} className="forecast-icon"/>
            </div>
        </div>
     );
}
 
export default DayForecast;
