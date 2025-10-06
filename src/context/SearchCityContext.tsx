'use client'
import { createContext, useState, useContext } from 'react'

type CityNameContextType = {
    cityName: string
    setCityName: (name: string) => void
}

const CityNameContext = createContext<CityNameContextType | undefined>(
    undefined
)

export function CityNameProvider({ children }: { children: React.ReactNode }) {
    const [cityName, setCityName] = useState('')

    return (
        <CityNameContext.Provider value={{ cityName, setCityName }}>
            {children}
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
