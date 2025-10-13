import { IoIosArrowRoundUp, IoIosArrowRoundDown } from 'react-icons/io'

import { WeatherType } from '@/types'

type Props = {
    max: number
    min: number
}

export default function TempCard({ max, min }: Props) {
    return (
        <div className='w-1/2 h-full shrink-0 flex justify-center items-center gap-2 bg-[#9D92E3] text-white  text-xl py-4 rounded-md'>
            <div className='flex'>
                <IoIosArrowRoundUp size={24} color='#211869' />
                {Math.ceil(max)}&deg;
            </div>
            <div className='flex'>
                <IoIosArrowRoundDown size={24} color='#211869' />
                {Math.floor(min)}&deg;
            </div>
        </div>
    )
}
