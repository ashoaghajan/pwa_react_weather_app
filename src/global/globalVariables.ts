export const WEATHER_URL = 'https://api.openweathermap.org/data/2.5/weather';
export const FORECAST_URL = 'https://api.openweathermap.org/data/2.5/forecast';
export const geocodeToCity = `https://api.bigdatacloud.net/data/reverse-geocode-client`;

export const API_KEY = process.env.REACT_APP_WEATHER_API_KEY;
export const iconLink = 'https://openweathermap.org/img/wn';

export const initWeather = {
    main: {
        temp: 0
    },
    name: '',
    sys: {
        country: ''
    },
    weather: [
        {
            icon: '',
            description: ''
        }
    ]
}

export const initForecast = {
    city: {
        country: '',
        name: ''
    },
    list: [
        {
            date: '',
            dt_txt: '',
            main: {
                temp: 0
            },
            sys: {
                country: ''
            },
            weather: [{
                icon: '',
                description: ''
            }]
        }
    ]
}