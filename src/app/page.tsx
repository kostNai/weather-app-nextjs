import CityCard from '@/components/cityCard/CityCard'
import CurrentLocationInfo from '@/components/currentLocationInfo/CurrentLocationInfo'
import Search from '@/components/search/Search'

export default async function Home() {
    return (
        <div className='w-full h-[calc(100%-97px)]'>
            <div className='w-full border-b-solid border-b-gray-300 border-b-2 py-8'>
                <Search />
            </div>
            <div className='pl-8 w-full flex h-full'>
                <div className='w-[60%] pr-8 pt-8'>
                    <CurrentLocationInfo />
                    <div className='mt-4'>
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
