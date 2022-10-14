export type Weather = {
    main: {
        temp: number,
        feels_like: number,
        pressure: number
    },
    name: string,
    timezone: number,
    weather: iconWeather[],
    wind: Wind
}

type iconWeather = {
    icon: ''
}

type Wind = {
    speed: number
}
