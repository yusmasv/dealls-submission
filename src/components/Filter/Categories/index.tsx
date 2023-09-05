  import React, { useEffect, useState } from 'react'
  import { selectCategory, setCategory } from '../../../slice/filter-slice';
  import { useDispatch, useSelector } from 'react-redux';
  import { getCategoriesType } from '../../../service';

  function Categories() {

      const [categories, setCategories] = useState<string[]>([])
      const category = useSelector(selectCategory)
      const dispatch = useDispatch()

      const handleCategories = (e: React.ChangeEvent<HTMLSelectElement>) => {
          dispatch(setCategory(e.target.value))
      }
    
      useEffect(() => {
        const fetchData = async () => {
          setCategories(await getCategoriesType())
         }
      
         fetchData();

      }, [])

    return (
      <div className='mt-5'>
          <span className="bg-blue-100 text-blue-800 text-sm font-medium mr-2 px-2.5 py-0.5 rounded dark:bg-blue-900 dark:text-blue-300">Category</span>
          <select onChange={(e) => handleCategories(e)} id="countries" className="bg-gray-50 border mt-3 px-4 border-gray-300 text-gray-500 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5 w-full dark:bg-white-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
          <option value="">All category</option>
          {
            ((categories.length !== 0) ?
            categories.map((item) => (
              (item === category) ? <option selected value={item}>{item}</option> : <option value={item}>{item}</option>
          )) :

          <option value="">No data</option>
            )
          }
          </select>
      </div>


    )
  }

  export default Categories