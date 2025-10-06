import CityCard from '@/components/cityCard/CityCard'
import Search from '@/components/search/Search'
import { MdOutlineMyLocation } from 'react-icons/md'

export default async function Home() {
    return (
        <div className='w-full h-[calc(100%-97px)]'>
            <div className='w-full border-b-solid border-b-gray-300 border-b-2 py-8'>
                <Search />
            </div>
            <div className='pl-8 w-full flex h-full'>
                <div className='w-[60%] pr-8 pt-8'>
                    <div className='w-full flex justify-between items-center'>
                        <div className='flex flex-col gap-1'>
                            <p className='text-gray-400 text-sm'>
                                Поточна локація
                            </p>
                            <h4 className='font-bold'>Дніпро, Україна</h4>
                        </div>
                        <MdOutlineMyLocation
                            size={24}
                            className='bg-gray-300/50 rounded-full'
                        />
                    </div>
                    <div>
                        <CityCard />
                    </div>
                    <div></div>
                    <div></div>
                </div>
                <div className='w-[40%] h-full bg-[#F6F4FC] '></div>
            </div>
        </div>
    )
}
