import React, { useState } from 'react';
import { fetchWeather } from './api/fetchWeather';
import { initWeather } from './global/globalVariables';
import CityWeather from './components/CityWeather';

function App() {

  const [city, setCity] = useState('');
  const [weather, setWeather] = useState(initWeather);

  const search = async(e: React.KeyboardEvent<HTMLInputElement>) => {
    if(e.key === 'Enter' && city){
      const data = await fetchWeather(city);
      if(data){
        setWeather(data);
      }
      setCity('');
    }
  }

  return (
    <div className="main-container">
      <input type='text' className='search' placeholder="Search..."  value={city} 
      onChange={(e) => setCity(e.target.value)} onKeyPress={(e) => search(e)}/>
      {weather.main.temp && <CityWeather weather={weather}/>}
    </div>
  );
}

export default App;
