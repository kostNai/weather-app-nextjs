import AddCity from '@/components/addCity/AddCity'
import CityCard from '@/components/cityCard/CityCard'
import CurrentLocationInfo from '@/components/currentLocationInfo/CurrentLocationInfo'
import FewDaysForecast from '@/components/fewDaysForecast/FewDaysForecast'
import Search from '@/components/search/Search'
import TodaysHighlights from '@/components/todaysHighlights/TodaysHighlights'

export default async function Home() {
    return (
        <div className='w-full h-[calc(100%-97px)]'>
            <div className='w-full border-b-solid border-b-gray-300 border-b-2 py-8'>
                <Search />
            </div>
            <div className='pl-8 w-full flex h-full'>
                <div className='w-[70%] pr-8 pt-8'>
                    <CurrentLocationInfo />
                    <div className='mt-4 flex gap-10 h-fit'>
                        <CityCard />
                        <AddCity />
                    </div>
                    <div className='mt-10'>
                        <h2 className='text-2xl font-bold'>
                            Основні показники
                        </h2>
                        <TodaysHighlights />
                    </div>
                    <div></div>
                </div>
                <div className='w-[30%] h-full bg-[#F6F4FC] '>
                    <FewDaysForecast />
                </div>
            </div>
        </div>
    )
}
