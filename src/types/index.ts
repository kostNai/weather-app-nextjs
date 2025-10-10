export type GeoCodingResponse = {
    country: string
    lat: number
    lon: number
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    local_names?: any
    name: string
    state: string
}

type NestedWeatherType = [
    {
        id: number
        main: string
        description: string
        icon: string
    }
]

type CurrentWeatherType = {
    clouds: number
    dew_point: number
    dt: number
    feels_like: number
    humidity: number
    pressure: number
    sunrise: number
    sunset: number
    temp: number
    uvi: number
    visibility: number
    wind_deg: number
    wind_gust: number
    wind_speed: number
    weather: NestedWeatherType
}

type FeelsLikeWeatherType = {
    day: number
    eve: number
    morn: number
    night: number
}

type DailyWeatherTempType = {
    day: number
    eve: number
    morn: number
    night: number
    max: number
    min: number
}

type DailyWeatherType = {
    clouds: number
    dew_point: number
    dt: number
    humidity: number
    moon_phase: number
    moonrise: number
    moonset: number
    pop: number
    pressure: number
    summary: string
    sunrise: number
    sunset: number
    uvi: number
    wind_deg: number
    wing_gust: number
    wind_speed: number
    weather: NestedWeatherType
    daily: FeelsLikeWeatherType
    temp: DailyWeatherTempType
}

export type WeatherType = {
    lat: number
    lon: number
    timezone: string
    timezone_offset: number
    current: CurrentWeatherType
    daily: DailyWeatherType[]
}
