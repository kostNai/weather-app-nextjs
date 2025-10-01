import { CiSearch } from 'react-icons/ci'

export default function Search() {
    return (
        <div className='relative my-8 ml-8 w-fit'>
            <input
                type='text'
                className='w-[400px] bg-gray-300 rounded-sm py-1 pl-2 pr-8 focus:outline-0'
                placeholder='Пошук'
            />
            <CiSearch
                className='absolute right-1 top-1'
                size={24}
                color='#171B60'
            />
        </div>
    )
}
