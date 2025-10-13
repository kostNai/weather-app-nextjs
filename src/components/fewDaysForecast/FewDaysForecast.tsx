'use client'

import { useWeather } from '@/context/Context'
import { useEffect, useState } from 'react'
import TempCard from '../shared/TempCard/TempCard'
import DayCard from '../shared/dayCard/DayCard'
import { DailyWeatherType } from '@/types'

const defaultDaysForDailyForecastCount = 3

export default function FewDaysForecast() {
    const { weather } = useWeather()

    const [countDays, setCountDays] = useState<number>(
        defaultDaysForDailyForecastCount
    )

    const [forecastForDays, setForecastForDays] = useState<DailyWeatherType[]>(
        []
    )
    useEffect(() => {
        if (weather)
            setForecastForDays(
                weather?.daily?.filter((day, indx) => {
                    if (indx > 0 && indx <= countDays) return day
                })
            )
    }, [weather, countDays])

    return (
        weather && (
            <div className='pt-10 px-4'>
                <h2 className='text-2xl font-bold'>Прогноз на:</h2>
                <div className='mt-2'>
                    <button className='flex gap-2 px-2 py-1 bg-white rounded-md [&>*]:cursor-pointer [&>*]:transition [&>*]:duration-300 '>
                        <div
                            className={
                                countDays === 3
                                    ? `bg-[#9D92E3] text-white p-1 rounded-md`
                                    : 'p-1'
                            }
                            onClick={() => setCountDays(3)}
                        >
                            3 дні
                        </div>
                        <div
                            className={
                                countDays === 7
                                    ? `bg-[#9D92E3] text-white p-1 rounded-md`
                                    : 'p-1'
                            }
                            onClick={() => setCountDays(7)}
                        >
                            7 днів
                        </div>
                    </button>
                </div>
                <div className='mt-10 flex flex-col gap-4'>
                    {forecastForDays.map((day, indx) => (
                        <div className='flex  rounded-md h-[50px]' key={indx}>
                            <TempCard max={day.temp.max} min={day.temp.min} />
                            <DayCard
                                weather={weather}
                                description={day.weather[0].description}
                                date={day.dt}
                                icon={day.weather[0].icon}
                            />
                        </div>
                    ))}
                </div>
            </div>
        )
    )
}
