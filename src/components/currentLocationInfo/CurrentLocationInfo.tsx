'use client'
import { useCity } from '@/context/SearchCityContext'
import { countries } from '@/data/countries'
import { MdOutlineMyLocation } from 'react-icons/md'

export default function CurrentLocationInfo() {
    const { city, setCity } = useCity()

    return (
        <div className='w-full flex justify-between items-center'>
            <div className='flex flex-col gap-1'>
                <p className='text-gray-400 text-sm'>Поточна локація</p>
                <h4 className='font-bold'>
                    {city.name}, {countries[city.country]}
                </h4>
            </div>
            <MdOutlineMyLocation
                size={24}
                className='bg-gray-300/50 rounded-full'
            />
        </div>
    )
}
