/* eslint-disable @typescript-eslint/no-explicit-any */
'use client'
import { GeoCodingResponse } from '@/types'
import { createContext, useState, useContext } from 'react'

type CityNameContextType = {
    cityName: string
    setCityName: (name: string) => void
}
type CityContextType = {
    city: GeoCodingResponse
    setCity: (city: GeoCodingResponse) => void
}

const CityNameContext = createContext<CityNameContextType | undefined>(
    undefined
)
const CityContext = createContext<CityContextType | undefined>(undefined)
const WeatherContext = createContext<any | undefined>(undefined)

export function CityNameProvider({ children }: { children: React.ReactNode }) {
    const [cityName, setCityName] = useState('')
    const [city, setCity] = useState({
        country: '',
        lat: 0,
        lon: 0,
        name: '',
        state: '',
    })
    const [weather, setWeather] = useState<any>(undefined)
    return (
        <CityNameContext.Provider value={{ cityName, setCityName }}>
            <CityContext.Provider value={{ city, setCity }}>
                <WeatherContext.Provider value={{ weather, setWeather }}>
                    {children}
                </WeatherContext.Provider>
            </CityContext.Provider>
        </CityNameContext.Provider>
    )
}

export const useCityName = () => {
    const context = useContext(CityNameContext)
    if (!context) {
        throw new Error('useCityName must be used within a CityNameProvider')
    }
    return context
}
export const useCity = () => {
    const context = useContext(CityContext)
    if (!context) {
        throw new Error('useCityName must be used within a CityNameProvider')
    }
    return context
}
export const useWeather = () => {
    const context = useContext(WeatherContext)
    if (!context) {
        throw new Error('useCityName must be used within a CityNameProvider')
    }
    return context
}
