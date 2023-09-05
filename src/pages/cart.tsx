import React, { useEffect, useState } from 'react'
import { getCart } from '../service';
import cartData from '../types/cartData'
import TableCart from '../components/TableCart';
function Cart() {

    const [allCarts, setAllCarts] = useState<cartData[]>([]);
    const [lengthData, setlengthData] = useState<number>(0);
    const [entryState, setentryState] = useState<number>(1);
    const [skip, setSkip] = useState<number>(0);
    const limit: number = 5;

    useEffect(() => {

        const FetchData = async () => {
            let data = await getCart(0, 0)
            setAllCarts(data)
            setlengthData(data.length)
            
           }
        
           FetchData(); 
           
    }, [])

    useEffect(() => {

        const FetchData = async () => {
            let data = await getCart(skip, limit)
            setAllCarts(data)
            console.log(data)
           }
        
           FetchData(); 
    }, [skip, lengthData])

    const handlePrevPagination = () => {
        if (skip > 0) {
          setSkip(skip-5)
          setentryState(entryState-1)
        }
      }
    
      const handleNextPagination = () => {
        if (skip < lengthData-limit) {
          setSkip(skip+5)
          setentryState(entryState+1)
        }
      }

  return (

    <div className='overflow-hidden p-4 sm:ml-64'>

        <div className="p-4 mb-4 text-sm text-blue-800 rounded-lg bg-blue-50 dark:bg-gray-800 dark:text-blue-400" role="alert">
        🛒 Welcome to  <span className="font-medium">cart list! </span>
        </div>
        
    
        <TableCart data={allCarts} />
        <div className="fixed bottom-6 right-6">
            <span className='mr-5 text-xs'>Page {entryState} / {Math.ceil(lengthData/5)}</span>
            <button type="button" onClick={handlePrevPagination} className="py-2.5 px-5 mr-2 mb-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700">Previous</button>
            <button type="button" onClick={handleNextPagination} className="py-2.5 px-5 mr-2 mb-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700">Next</button>
        </div>
    </div>

  )
}

export default Cart