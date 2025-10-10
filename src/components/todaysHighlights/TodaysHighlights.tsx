'use client'
import { useWeather } from '@/context/Context'
import { IoArrowDownCircle, IoArrowUpCircle } from 'react-icons/io5'

export default function TodaysHighlights() {
    const { weather } = useWeather()

    const getWindSpeedInM = (winSpeedInKm: number | undefined) => {
        return winSpeedInKm ? Math.ceil(winSpeedInKm / 3.6) : 0
    }

    const getDate = (date: number | undefined): string => {
        if (date) {
            const myDate = new Date(date * 1000)
            return `${
                myDate.getHours() < 10
                    ? `0${myDate.getHours()}`
                    : myDate.getHours()
            }:${
                myDate.getMinutes() < 10
                    ? `0${myDate.getMinutes()}`
                    : myDate.getMinutes()
            }`
        }
        return ''
    }

    return (
        <div className='mt-2 w-full flex gap-10 justify-between [&>*]:flex-1'>
            <div className='border-2 border-gray-300 border-solid rounded-md h-fit flex flex-col gap-4 p-2'>
                <h5 className='text-gray-400'>Атмосферний тиск</h5>
                <p className='font-bold'>{weather?.current.pressure} мм</p>
            </div>
            <div className='border-2 border-gray-300 border-solid rounded-md h-fit flex flex-col gap-4 p-2'>
                <h5 className='text-gray-400'>Вологість</h5>
                <p>{weather?.current.humidity} %</p>
            </div>
            <div className='border-2 border-gray-300 border-solid rounded-md h-fit flex flex-col gap-4 p-2'>
                <h5 className='text-gray-400'>Швидкість вітру</h5>
                <p>{getWindSpeedInM(weather?.current?.wind_speed)} м/с</p>
            </div>
            <div className='border-2 border-gray-300 border-solid rounded-md h-fit flex flex-col gap-4 p-2'>
                <h5 className='text-gray-400'>Схід та захід сонця</h5>
                <div className='flex gap-3'>
                    <div className='flex items-center gap-2'>
                        <IoArrowUpCircle size={24} color='#9D92E3' />
                        {getDate(weather?.current.sunrise)}
                    </div>
                    <div className='flex items-center gap-2'>
                        <IoArrowDownCircle size={24} color='#9D92E3' />
                        {getDate(weather?.current.sunset)}
                    </div>
                </div>
            </div>
        </div>
    )
}
