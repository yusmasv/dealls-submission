import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import { getCartId, getUser } from '../service';
import cartData from '../types/cartData';
import userData from '../types/userData';
import Table from '../components/Table';
import productData from '../types';
import Loader from '../components/Loader';
import TableProductDetail from '../components/TableProductDetail';

function CartDetail() {

    const { id } = useParams();
    const [data, setData] = useState<cartData>()
    const [user, setUser] = useState<userData>()
    const [product, setProduct] = useState<productData[] | undefined>()
    const cartId: string = id!;
    console.log(id)

    useEffect(() => {
        const fetchData = async () => {
        let data = await getCartId(parseInt(cartId))
        let user = await getUser(data.userId)
        setProduct(data.products)
        setData(data)
        setUser(user)

        }
    
        fetchData();
    }, [])


  return (
    <div className='overflow-hidden p-4 sm:ml-64'>
        {data && user ? (

            <div className="w-full p-4 bg-white border border-gray-200 rounded-lg shadow sm:p-8 dark:bg-gray-800 dark:border-gray-700">
            <h5 className="mb-9 text-3xl font-bold text-blue-500">🛒 Cart #{id}</h5>
            <tbody>
            <tr className="bg-white text-left dark:bg-gray-800">
                <th scope="row" className="px-6 py-2 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                   User
                </th>
                <td className="px-6 py-2">
                    {user.firstName} {user.lastName}
                </td>
            </tr>
            <tr className="bg-white text-left dark:bg-gray-800">
                <th scope="row" className="px-6 py-2 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                    Total Items
                </th>
                <td className="px-6 py-2">
                    {data.totalProducts} items
                </td>
            </tr>

            <tr className="bg-white text-left dark:bg-gray-800">
                <th scope="row" className="px-6 py-2 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                    Total Amount
                </th>
                <td className="px-6 py-2">
                    <s>$ {data.total}</s> &nbsp;
                    <span className='text-sm font-bold text-blue-800'>${data.discountedTotal} </span> &nbsp; &nbsp; 
                    
                </td>
            </tr>
            <tr className="bg-white text-left dark:bg-gray-800">
                <th scope="row" className="px-6 py-2 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                 
                </th>
                <td className="px-6 py-2">
                   
                    <span className="bg-blue-100 text-blue-800 text-sm font-bold mr-2 px-2 py-0.5 rounded dark:bg-blue-900 dark:text-blue-300">{Math.round((data.total - data.discountedTotal)/(data.total)*100)}% OFF 🔥</span> 
                </td>
            </tr>
           
        </tbody>

        {product ? <TableProductDetail data={product}/> : false}
            
            </div>

        ) : <Loader />}
        

        </div>
  )
  
}

export default CartDetail