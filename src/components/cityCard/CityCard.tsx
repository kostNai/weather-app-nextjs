'use client'
import { useCity, useCityName, useWeather } from '@/context/Context'
import { countries } from '@/data/countries'
import Image from 'next/image'
import React, { Suspense, useEffect, useState } from 'react'
import {
    FaCloud,
    FaCloudRain,
    FaCloudShowersHeavy,
    FaCloudSun,
    FaSun,
    FaSnowflake,
} from 'react-icons/fa6'
import { WiCelsius } from 'react-icons/wi'

const pixapbayApiKey = process.env.NEXT_PUBLIC_PIXABAY_API_KEY
const weatherApiKey = process.env.NEXT_PUBLIC_WEATHER_API_KEY

function getRandomValue(min: number, max: number): number {
    return Math.random() * (max - min) + min
}

export default function CityCard() {
    const [imageUrl, setImageUrl] = useState<string>('')
    const { city, setCity } = useCity()

    const { cityName } = useCityName()
    const { weather, setWeather } = useWeather()

    const capitalizeFirstLetter = (str: string): string =>
        str.charAt(0).toUpperCase() + str.slice(1)

    const getCurrentDate = (): string => {
        const today = new Date()
        const dayName = today.toLocaleDateString('uk-UA', { weekday: 'long' })

        return capitalizeFirstLetter(dayName)
    }

    const getCurrentTime = (): string => {
        const today = new Date()

        return `${today.getHours()}:${today.getMinutes()}`
    }

    getCurrentTime()

    useEffect(() => {
        const fetchImageUrl = async () => {
            const res = await fetch(
                `https://pixabay.com/api/?key=${pixapbayApiKey}&q=${city.name}+urban&image_type=photo`
            )
            const json = await res.json()
            const images = json.hits
            const index = Math.ceil(getRandomValue(0, 19))
            if (Array.isArray(images)) {
                images.map((img, indx: number) => {
                    if (indx === index) {
                        setImageUrl(img.largeImageURL)
                        console.log(city)
                    }
                })
            }
        }
        fetchImageUrl()
    }, [city])
    useEffect(() => {
        const fetchWeather = async () => {
            const res = await fetch(
                `https://api.openweathermap.org/data/3.0/onecall?lat=${city.lat}&lon=${city.lon}&appid=${weatherApiKey}&exclude=hourly,minutely&lang=uk&units=metric`
            )
            const json = await res.json()

            setWeather(json)
        }
        fetchWeather()
        console.log(weather)
    }, [city, setWeather])

    return (
        <div className='w-2/3 h-[300px] relative text-white'>
            <div className='relative w-full h-full rounded-md'>
                <Image
                    src={
                        imageUrl
                            ? imageUrl
                            : 'https://cdn.pixabay.com/photo/2022/05/22/11/10/highway-7213206_1280.jpg'
                    }
                    alt='city image'
                    fill
                    style={{
                        objectFit: 'cover',
                        objectPosition: 'top center',
                    }}
                    className='rounded-md'
                />
            </div>
            <div className='absolute top-0 left-0 pt-4 px-4 flex justify-between items-center w-full'>
                <div className='flex items-center'>
                    <FaCloud color='white' path='white' size={64} />
                    {/* <FaCloudRain color='white' path='white' />
                    <FaCloudSun color='white' path='white' />
                    <FaCloudShowersHeavy color='white' path='white' />
                    <FaSun color='white' path='white' />
                    <FaSnowflake color='white' path='white' /> */}
                    <p className='text-6xl flex items-start'>
                        {weather && Math.ceil(weather.current.temp)}
                        <WiCelsius color='white' path='white' size={32} />
                    </p>
                </div>
                <div className='flex flex-col'>
                    <p>
                        {getCurrentDate()}, {getCurrentTime()}
                    </p>
                    <p className='flex items-center gap-2'>
                        <FaCloud />{' '}
                        {weather && weather.current.weather[0].description}
                    </p>
                </div>
            </div>
        </div>
    )
}
