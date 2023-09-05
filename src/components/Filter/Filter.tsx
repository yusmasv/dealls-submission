import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { setCategory, setQuery, setEndRange, setStartRange, selectStartRange, selectEndRange, selectBrand, selectCategory, setFilterStatus, selectQuery, setBrand } from '../../slice/filter-slice';
import Categories from './Categories'
import PriceRange from './PriceRange'
import Brand from './Brand'

declare global {
    interface Window {
        my_modal_5: string;
    }
  }

function FilterModal() {

  const dispatch = useDispatch()
  const query = useSelector(selectQuery)

  
  const removeFilter = () => {
      dispatch(setQuery(""));
      dispatch(setCategory(""));
      dispatch(setBrand(""));
      dispatch(setStartRange(0));
      dispatch(setEndRange(0));
      dispatch(setFilterStatus(false));
      localStorage.clear();
  }

  const handleFilter = () => {
      dispatch(setQuery(query));
      dispatch(setFilterStatus(true));
  }

  return (
    <div className='mt-3'>
        
       <label htmlFor="my_modal_6" className="px-3 py-2 text-sm font-medium text-center inline-flex items-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
       <svg className='mr-2' xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 512 512"><path d="M3.9 54.9C10.5 40.9 24.5 32 40 32H472c15.5 0 29.5 8.9 36.1 22.9s4.6 30.5-5.2 42.5L320 320.9V448c0 12.1-6.8 23.2-17.7 28.6s-23.8 4.3-33.5-3l-64-48c-8.1-6-12.8-15.5-12.8-25.6V320.9L9 97.3C-.7 85.4-2.8 68.8 3.9 54.9z" fill='#ffffff'/></svg>
        Filter
        </label>

        <label htmlFor="my_modal_7" className="ml-1 px-3 py-2 text-sm font-medium text-center inline-flex items-center text-white bg-sky-400 rounded-lg hover:bg-sky-500 focus:ring-4 focus:outline-none focus:ring-sky-100 dark:bg-sky-300 dark:hover:bg-sky-300 dark:focus:ring-sky-500">
        <svg className='mr-2' xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 576 512"><path d="M3.9 22.9C10.5 8.9 24.5 0 40 0H472c15.5 0 29.5 8.9 36.1 22.9s4.6 30.5-5.2 42.5L396.4 195.6C316.2 212.1 256 283 256 368c0 27.4 6.3 53.4 17.5 76.5c-1.6-.8-3.2-1.8-4.7-2.9l-64-48c-8.1-6-12.8-15.5-12.8-25.6V288.9L9 65.3C-.7 53.4-2.8 36.8 3.9 22.9zM432 224a144 144 0 1 1 0 288 144 144 0 1 1 0-288zm59.3 107.3c6.2-6.2 6.2-16.4 0-22.6s-16.4-6.2-22.6 0L432 345.4l-36.7-36.7c-6.2-6.2-16.4-6.2-22.6 0s-6.2 16.4 0 22.6L409.4 368l-36.7 36.7c-6.2 6.2-6.2 16.4 0 22.6s16.4 6.2 22.6 0L432 390.6l36.7 36.7c6.2 6.2 16.4 6.2 22.6 0s6.2-16.4 0-22.6L454.6 368l36.7-36.7z" fill='#ffffff'/></svg>
        Remove filter
        </label>        

        <input type="checkbox" id="my_modal_6" className="modal-toggle" />
        <div className="modal">
        <div className="modal-box">
            <p className="font-bold text-lg">Filter products</p>
            <Categories />
            <PriceRange />
            <Brand />
            <div className="modal-action">
            <label onClick={handleFilter} htmlFor="my_modal_6" className="text-white  bg-sky-400 rounded-lg hover:bg-sky-500 focus:ring-4 focus:outline-none focus:ring-sky-100 text-sm px-5 py-2 mr-2 mb-2 font-medium dark:bg-sky-300 dark:hover:bg-sky-300 dark:focus:ring-sky-500">Apply filters</label>
            <label onClick={removeFilter} htmlFor="my_modal_6" className="text-white  bg-sky-400 rounded-lg hover:bg-sky-500 focus:ring-4 focus:outline-none focus:ring-sky-100 text-sm px-5 py-2 mr-2 mb-2 font-medium dark:bg-sky-300 dark:hover:bg-sky-300 dark:focus:ring-sky-500">Cancel</label>
            </div>
        </div>
        </div>

        <input type="checkbox" id="my_modal_7" className="modal-toggle" />
        <div className="modal">
        <div className="modal-box">
            <h3 className="font-medium text-md">🔃 Are you sure you want to remove filters? </h3>
            <div className="modal-action">
              
            <label htmlFor="my_modal_7" onClick={removeFilter} className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">Yes, remove filter</label>
            <label htmlFor="my_modal_7" className="text-white  bg-sky-400 rounded-lg hover:bg-sky-500 focus:ring-4 focus:outline-none focus:ring-sky-100 text-sm px-5 py-2 mr-2 mb-2 font-medium dark:bg-sky-300 dark:hover:bg-sky-300 dark:focus:ring-sky-500">Cancel</label>
            </div>
        </div>
        </div>

    </div>
  )
}

export default FilterModal