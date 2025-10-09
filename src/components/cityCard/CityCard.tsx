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
    FaMoon,
} from 'react-icons/fa6'
import { WiCelsius } from 'react-icons/wi'

const pixapbayApiKey = process.env.NEXT_PUBLIC_PIXABAY_API_KEY
const weatherApiKey = process.env.NEXT_PUBLIC_WEATHER_API_KEY

function getRandomValue(min: number, max: number): number {
    return Math.random() * (max - min) + min
}
const setIconUrl = (iconCode: string) => {
    return `https://openweathermap.org/img/wn/${iconCode}.png`
}

export default function CityCard() {
    const [imageUrl, setImageUrl] = useState<string>('')
    const { city } = useCity()
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

        return `${
            today.getHours() < 10 ? `0${today.getHours()}` : today.getHours()
        }:${
            today.getMinutes() < 10
                ? `0${today.getMinutes()}`
                : today.getMinutes()
        }`
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
            localStorage.setItem('weather', JSON.stringify(json))
        }
        fetchWeather()

        if (localStorage.getItem('weather')) {
            setWeather(JSON.parse(localStorage.getItem('weather')!))
        }
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
                {weather && (
                    <div className='flex items-center'>
                        <div className='relative w-15 h-15'>
                            <Image
                                src={setIconUrl(
                                    weather.current.weather[0].icon
                                )}
                                alt='icon'
                                fill
                                style={{ objectFit: 'contain' }}
                            />
                        </div>
                        <p className='text-6xl flex items-start'>
                            {weather && Math.ceil(weather.current.temp)}
                            <WiCelsius color='white' path='white' size={32} />
                        </p>
                    </div>
                )}
                <div className='flex flex-col'>
                    <p>
                        {getCurrentDate()}, {getCurrentTime()}
                    </p>
                    {weather && (
                        <div className='flex gap-2 items-center'>
                            <div className='relative w-6 h-6'>
                                <Image
                                    src={setIconUrl(
                                        weather.current.weather[0].icon
                                    )}
                                    alt='icon'
                                    fill
                                    style={{ objectFit: 'contain' }}
                                />
                            </div>
                            <p className='flex items-center gap-2'>
                                {weather &&
                                    weather.current.weather[0].description}
                            </p>
                        </div>
                    )}
                </div>
            </div>
        </div>
    )
}
