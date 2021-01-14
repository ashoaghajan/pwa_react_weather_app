export const WEATHER_URL = 'https://api.openweathermap.org/data/2.5/weather';
export const API_KEY = process.env.REACT_APP_WEATHER_API_KEY

export const initWeather = {
    main: {
        temp: 0
    },
    name: '',
    sys: {
        country: ''
    },
    weather: []
}

export const iconLink = 'https://openweathermap.org/img/wn';