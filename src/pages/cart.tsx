import React, { useEffect, useState } from 'react'
import { getCart } from '../service';
import cartData from '../types/cartData'
function Cart() {

    const [allCarts, setAllCarts] = useState<cartData[]>([]);

    useEffect(() => {

        const FetchData = async () => {
            let data = await getCart()
            setAllCarts(data)
            //console.log(carts)
           }
        
           FetchData();

        
    }, [])

  return (

    <div className='overflow-hidden p-4 sm:ml-64'>{allCarts.map((item):  React.ReactNode => (
        <h1>{item.discountedTotal}</h1>
    ))}</div>
  )
}

export default Cart