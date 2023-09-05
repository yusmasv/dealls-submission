import React from 'react'
import { selectBrand, setBrand } from '../../../slice/filter-slice';
import { useDispatch, useSelector } from 'react-redux';

function Brand() {

    const Brand = useSelector(selectBrand)
    const dispatch = useDispatch()

    const handleBrand = (e: React.ChangeEvent<HTMLInputElement>) => {
        dispatch(setBrand(e.target.value));
    }

  return (
    <div className='mt-5'>
        <span className="bg-blue-100 text-blue-800 text-sm font-medium mr-2 px-2.5 py-0.5 rounded dark:bg-blue-900 dark:text-blue-300">Brand</span>
        <input onChange={(e) => handleBrand(e)} value={Brand} type="search" id="default-search" className="block mt-3 w-full px-4 py-2.5 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="All brands"></input>
    </div>
  )
}

export default Brand