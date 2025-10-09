import { FaPlus } from 'react-icons/fa'

export default function AddCity() {
    return (
        <div className='w-1/3 h-[300px] bg-gray-100 rounded-md flex items-center justify-center'>
            <div className='flex flex-col justify-center items-center text-gray-400'>
                <FaPlus />
                <p>Додати місто</p>
            </div>
        </div>
    )
}
