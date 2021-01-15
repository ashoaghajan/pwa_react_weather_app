import React from 'react';
import { iconLink } from '../global/globalVariables';

export interface CityWeatherProps {
    weather: Weather
}
 
const CityWeather: React.SFC<CityWeatherProps> = ({ weather }) => {

    return ( 
        <div className="city">
          <h2 className='city-name'>
            <span>{weather.name}</span>
            <sup>{weather.sys.country}</sup>
          </h2>
          <div className="city-temp">
              {Math.round(weather.main.temp)}
              <sup>&deg;C</sup>
          </div>
          <div className="info">
              <img src={`${iconLink}/${weather.weather[0].icon}@2x.png`} alt={weather.weather[0].description} className="city-icon"/>
                <p>{weather.weather[0].description}</p>
          </div>
        </div>
     );
}
 
export default CityWeather;
