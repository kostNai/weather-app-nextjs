import { getDayName } from '@/helpers/getDayName'
import { setIconUrl } from '@/helpers/setIconUrl'
import { NestedWeatherType, WeatherType } from '@/types'
import Image from 'next/image'

type Props = {
    weather: WeatherType
    date: number
    description: string
    icon: string
}

export default function DayCard({ weather, date, description, icon }: Props) {
    return (
        <div className='w-1/2 h-full flex grow-0 pl-4 items-center gap-2 bg-white py-2 rounded-r-md'>
            <div className='w-12 h-12 relative'>
                <Image
                    src={setIconUrl(icon)}
                    alt='icon'
                    fill
                    style={{ objectFit: 'contain' }}
                />
            </div>
            <div className='flex flex-col '>
                <h4 className='text-xl'>{getDayName(date)}</h4>
                <p className='text-sm text-gray-500'>{description}</p>
            </div>
        </div>
    )
}
