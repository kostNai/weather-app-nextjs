import { IoArrowDownCircle, IoArrowUpCircle } from 'react-icons/io5'
export default function TodaysHighlights() {
    return (
        <div className='mt-2 w-full flex gap-10 justify-between [&>*]:flex-1'>
            <div className='border-2 border-gray-300 border-solid rounded-md h-fit flex flex-col gap-4 p-2'>
                <h5>Вірогідність опадів</h5>
                <p>2%</p>
            </div>
            <div className='border-2 border-gray-300 border-solid rounded-md h-fit flex flex-col gap-4 p-2'>
                <h5>Вологість</h5>
                <p>42%</p>
            </div>
            <div className='border-2 border-gray-300 border-solid rounded-md h-fit flex flex-col gap-4 p-2'>
                <h5>Швидкість вітру</h5>
                <p>0 м/с</p>
            </div>
            <div className='border-2 border-gray-300 border-solid rounded-md h-fit flex flex-col gap-4 p-2'>
                <h5>Схід та захід сонця</h5>
                <div className='flex gap-3'>
                    <div className='flex items-center gap-2'>
                        <IoArrowUpCircle size={24} color='#9D92E3' />
                        6:18
                    </div>
                    <div className='flex items-center gap-2'>
                        <IoArrowDownCircle size={24} color='#9D92E3' />
                        7:27
                    </div>
                </div>
            </div>
        </div>
    )
}
