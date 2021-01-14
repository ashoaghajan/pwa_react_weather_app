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