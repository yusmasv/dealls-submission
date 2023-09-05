import cartData from '../../types/cartData'
import { Link } from 'react-router-dom'

function TableCart({ data }: { data: cartData[] }) {

  return (
    <div className="relative overflow-x-auto shadow-md sm:rounded-l mt-3">
        <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
            <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                <tr>
                    <th scope="col" className="px-6 py-3">
                        Cart ID
                    </th>
                    <th scope="col" className="px-6 py-3">
                        User ID
                    </th>
                    <th scope="col" className="px-6 py-3">
                        Total Products
                    </th>
                    <th scope="col" className="px-6 py-3">
                        Quantity
                    </th>
                    <th scope="col" className="px-6 py-3">
                        View Details
                    </th>
                </tr>
            </thead>
            <tbody>
            {data.map((cart, index) => {
                return (
                <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                    <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                        {cart.id}
                    </th>
                    <td className="px-6 py-4">
                        {cart.userId}
                    </td>
                    <td className="px-6 py-4">
                         {cart.totalProducts}    products
                    </td>
                    <td className="px-6 py-4">
                        {cart.totalQuantity} items
                    </td>
                    <td className="px-6 py-4">
                    <Link to={cart.id.toString()} type="button" className="text-white bg-[#1da1f2] hover:bg-[#1da1f2]/90 focus:ring-4 focus:outline-none focus:ring-[#1da1f2]/50 font-medium rounded-lg text-sm px-5 py-2 text-center inline-flex items-center dark:focus:ring-[#1da1f2]/55 mr-2">
                    <svg xmlns="http://www.w3.org/2000/svg" className='mr-2' height="1em" viewBox="0 0 576 512"><path d="M288 32c-80.8 0-145.5 36.8-192.6 80.6C48.6 156 17.3 208 2.5 243.7c-3.3 7.9-3.3 16.7 0 24.6C17.3 304 48.6 356 95.4 399.4C142.5 443.2 207.2 480 288 480s145.5-36.8 192.6-80.6c46.8-43.5 78.1-95.4 93-131.1c3.3-7.9 3.3-16.7 0-24.6c-14.9-35.7-46.2-87.7-93-131.1C433.5 68.8 368.8 32 288 32zM144 256a144 144 0 1 1 288 0 144 144 0 1 1 -288 0zm144-64c0 35.3-28.7 64-64 64c-7.1 0-13.9-1.2-20.3-3.3c-5.5-1.8-11.9 1.6-11.7 7.4c.3 6.9 1.3 13.8 3.2 20.7c13.7 51.2 66.4 81.6 117.6 67.9s81.6-66.4 67.9-117.6c-11.1-41.5-47.8-69.4-88.6-71.1c-5.8-.2-9.2 6.1-7.4 11.7c2.1 6.4 3.3 13.2 3.3 20.3z" fill='white'/></svg>
                    Detail
                    </Link>
                    </td>
                </tr>
            )})}
                
            </tbody>
        </table>
    </div>
  )
}

export default TableCart