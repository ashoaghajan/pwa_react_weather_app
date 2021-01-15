import React, { useState } from 'react';
import Forecast from './components/Forecast';
import { useWeather } from './hooks/useWeather';
import CityWeather from './components/CityWeather';

function App() {

  const { city, weather, forecast, setCity, search } = useWeather();
  const [showForecast, setShowForecast] = useState(false);
  const buttonText = !showForecast ? 'Show Forecast' : 'Show Current Temp';

  return (
    <div className="main-container">
      <input type='text' className='search' placeholder="Search..."  value={city} 
      onChange={(e) => setCity(e.target.value)} onKeyPress={(e) => search(e)}/>
      {weather.main.temp && !showForecast && <CityWeather weather={weather}/>}
      {forecast.city.name && showForecast && <Forecast forecast={forecast}/>}
      <button onClick={() => setShowForecast(!showForecast)}>{buttonText}</button>
    </div>
  );
}

export default App;
