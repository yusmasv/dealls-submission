import React from 'react'

function Nodata() {
  return (
    <div className=' text-center ml-8 p-0.5 leading-none rounded-full px-2 absolute -translate-y-1/2 -translate-x-1/2 top-2/4 left-1/2'>
        <div id="toast-simple" className="flex items-center w-full max-w-xs p-4 space-x-4 text-gray-500 bg-white divide-x divide-gray-200 dark:text-gray-400 dark:divide-gray-700 space-x dark:bg-gray-800" role="alert">
            <svg className="w-5 h-5 text-blue-600 dark:text-blue-500 rotate-45" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 20">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m9 17 8 2L9 1 1 19l8-2Zm0 0V9"/>
            </svg>
            <div className="pl-4 text-sm font-normal">No data, try another keyword.</div>
        </div>
    </div>
  )
}

export default Nodata