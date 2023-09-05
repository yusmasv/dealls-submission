import React from 'react'
import productData from '../../types'
import Nodata from '../Nodata'

const TableProductDetail = ({ data }: { data: productData[] }) => {

    if (data.length === 0) {
        return <Nodata />
    }

  return (
        <div className="relative overflow-x-auto shadow-md sm:rounded-l mt-3">
            <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                    <tr>
                        
                        <th scope="col" className="px-6 py-3">
                            Product name
                        </th>
                        <th scope="col" className="px-6 py-3">
                            Price
                        </th>
                        <th scope="col" className="px-6 py-3">
                            Quantity
                        </th>
                        <th scope="col" className="px-6 py-3">
                            Total
                        </th>
                        <th scope="col" className="px-6 py-3">
                            Discount
                        </th>
                        <th scope="col" className="px-6 py-3">
                            Discounted Price 🏷️💲
                        </th>
                    </tr>
                </thead>
                <tbody>
                {data.map((product) => (
                    <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                        
                        <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                            {product.title}
                        </th>
                        <td className="px-6 py-4">
                           $ {product.price}
                        </td>
                        <td className="px-6 py-4">
                            {product.quantity}
                        </td>
                        <td className="px-6 py-4">
                            {product.total}
                        </td>
                        <td className="px-6 py-4">
                            <span className="bg-blue-100 text-blue-800 text-sm font-bold mr-2 px-2 py-0.5 rounded dark:bg-blue-900 dark:text-blue-300"> {product.discountPercentage}%</span>
                            
                        </td>
                        <td className="px-6 py-4">
                            💲<span className='font-bold text-green-500'> {product.discountedPrice}</span>
                        </td>
                        
                    </tr>
                ))}
                    
                </tbody>
            </table>
        </div>

  )
}

export default TableProductDetail