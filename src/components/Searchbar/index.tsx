

import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { selectQuery, setQuery } from "../../slice/filter-slice";

const Searchbar = () => {

    //const [searchParams, setSearchParams] = useState<string>();
    const dispatch = useDispatch()
    const recentQuery = useSelector(selectQuery);
    
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      dispatch(setQuery(e.target.value));
      //setSearchParams(e.target.value)
      //localStorage.setItem('query', e.target.value);     
    }

  return (
    <div>
       <form onSubmit={(e) => e.preventDefault()}>
        <label htmlFor="default-search" className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white">Search</label>
        <div className="relative">
            <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                <svg className="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"/>
                </svg>
                
            </div>
            
            <input onChange={(e) => handleChange(e)} value={recentQuery} type="search" id="default-search" className="block w-full p-4 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder={ localStorage.getItem('query') || 'Search products...'} />
            
            <button type="submit" className="text-white absolute right-2.5 bottom-2.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Search</button>
        </div>
        </form>
    </div>
  )
}

export default Searchbar

function seSelector(selectQuery: any): any {
  throw new Error("Function not implemented.");
}
