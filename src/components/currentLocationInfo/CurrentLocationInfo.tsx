'use client'
import { useCity, useCityName } from '@/context/Context'
import { countries } from '@/data/countries'
import { MdOutlineMyLocation } from 'react-icons/md'

export default function CurrentLocationInfo() {
    const { city } = useCity()
    const { cityName } = useCityName()

    return (
        <div className='w-full flex justify-between items-center'>
            {cityName && (
                <div className='flex flex-col gap-1'>
                    <p className='text-gray-400 text-sm'>Поточна локація</p>
                    <h4 className='font-bold'>
                        {cityName}, {countries[city.country]}
                    </h4>
                </div>
            )}
            <MdOutlineMyLocation
                size={24}
                className='bg-gray-300/50 rounded-full'
            />
        </div>
    )
}
