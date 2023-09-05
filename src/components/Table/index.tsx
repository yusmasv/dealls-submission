import React from 'react'
import productData from '../../types'
import Nodata from '../Nodata'

const Table = ({ data }: { data: productData[] }) => {

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
                            Brand
                        </th>
                        <th scope="col" className="px-6 py-3">
                            Price
                        </th>
                        <th scope="col" className="px-6 py-3">
                            Stock
                        </th>
                        <th scope="col" className="px-6 py-3">
                            Category
                        </th>
                    </tr>
                </thead>
                <tbody>
                {data.map((product, index) => (
                    <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                        <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                            {product.title}
                        </th>
                        <td className="px-6 py-4">
                            {product.brand}
                        </td>
                        <td className="px-6 py-4">
                            $ {product.price}
                        </td>
                        <td className="px-6 py-4">
                            {product.stock}
                        </td>
                        <td className="px-6 py-4">
                            {product.category}
                        </td>
                    </tr>
                ))}
                    
                </tbody>
            </table>
        </div>

  )
}

export default Table