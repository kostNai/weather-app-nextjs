'use client'
import { useCity, useCityName } from '@/context/Context'
import { countries } from '@/data/countries'
import { GeoCodingResponse } from '@/types'
import { useEffect, useState } from 'react'
import { CiSearch } from 'react-icons/ci'

const weatherApi = process.env.NEXT_PUBLIC_WEATHER_API_KEY

export default function Search() {
    const [inputValue, setInputValue] = useState<string>('')
    const [citiesList, setCitiesList] = useState<GeoCodingResponse[]>([])
    const [isCitiesListVisible, setCitiesListVisible] = useState<boolean>(false)

    const { cityName, setCityName } = useCityName()
    const { setCity } = useCity()

    useEffect(() => {
        if (cityName) {
            const fetchCity = async () => {
                const res = await fetch(
                    `http://api.openweathermap.org/geo/1.0/direct?q=${cityName}&limit=5&appid=${weatherApi}`
                )

                const json = await res.json()
                setCitiesList(json)
                if (citiesList.length > 0) setCitiesListVisible(true)
            }
            fetchCity()
        }
    }, [cityName, citiesList.length])

    const onClickSearchIconHandler = () => {
        setCityName(inputValue)
        if (citiesList.length > 0) setCitiesListVisible(true)
    }

    return (
        <div className='relative ml-8 w-fit'>
            <input
                type='text'
                className='w-[400px] bg-gray-300 rounded-sm py-1 pl-2 pr-8 focus:outline-0'
                placeholder='Пошук'
                value={inputValue}
                onChange={(e) => {
                    setInputValue(e.target.value)
                }}
            />
            <CiSearch
                className='absolute right-1 top-1 cursor-pointer transition duration-300 active:scale-90'
                size={24}
                color='#171B60'
                onClick={onClickSearchIconHandler}
            />
            {isCitiesListVisible && (
                <div
                    className='w-full p-2 flex flex-col gap-2 mt-4 absolute top-6 left-0 bg-[#171B60] text-white z-10 rounded-md'
                    onMouseLeave={() => setCitiesListVisible(false)}
                >
                    {citiesList.map((city: GeoCodingResponse, indx: number) => (
                        <div
                            key={indx}
                            className='p-2 rounded-md flex gap-4 justify-between transition duration-300 cursor-pointer hover:bg-gray-300/50'
                            onClick={() => setCity(city)}
                        >
                            <p>{city.name}</p>
                            <p>{city.state}</p>
                            <p>{countries[city.country]}</p>
                        </div>
                    ))}
                </div>
            )}
        </div>
    )
}
