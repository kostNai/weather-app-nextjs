import Link from 'next/link'
import {
    IoHomeOutline,
    IoCalendarOutline,
    IoSettingsOutline,
} from 'react-icons/io5'
import { FiCompass } from 'react-icons/fi'
import { GrLocation, GrAnalytics } from 'react-icons/gr'

export default function SideNav() {
    return (
        <nav className='pt-28 bg-[#171B60] text-white w-1/5 flex flex-col gap-10 [&>*]:flex [&>*]:items-center [&>*]:gap-2 [&>*]:pl-20 [&>*]:py-3 [&>*]:transition [&>*]:duration-300 [&>*]:hover:bg-gray-400/50 '>
            <Link href='/'>
                <IoHomeOutline size={24} />
                Домашня
            </Link>
            <Link href='/'>
                <FiCompass size={24} />
                Forecast
            </Link>
            <Link href='/'>
                <GrLocation size={24} />
                Локація
            </Link>
            <Link href='/'>
                <GrAnalytics size={24} />
                Аналітика
            </Link>
            <Link href='/'>
                <IoCalendarOutline size={24} />
                Календар
            </Link>
            <Link href='/'>
                <IoSettingsOutline size={24} />
                Налаштування
            </Link>
        </nav>
    )
}
