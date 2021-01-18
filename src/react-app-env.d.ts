/// <reference types="react-scripts" />

type Weather = {
    main: {
        temp: number
    },
    name: string,
    sys: {
        country: string
    },
    weather: {
        icon: string,
        description: string
    }[]
}

type ForecastItem = {
    date: string,
    dt_txt: text,
    main: {
        temp: number
    },
    sys: {
        country: string
    },
    weather: {
        icon: string,
        description: string
    }[]
}

type Forecast = {
    city: {
        country: string,
        name: string
    },
    list: ForecastItem[]
}
