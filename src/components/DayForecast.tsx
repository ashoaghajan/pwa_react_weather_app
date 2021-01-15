import React from 'react';
import { iconLink } from '../global/globalVariables';

export interface DayForecastProps {
    forecastItem: ForecastItem
}
 
const DayForecast: React.SFC<DayForecastProps> = ({ forecastItem: item }) => {
    return ( 
        <div className="forecast-item">
            <div className="weekday">
                {item.date}
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
