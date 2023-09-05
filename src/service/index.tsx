import { useState } from 'react';
import { getAllProducts, getCategories } from '../repository';
import productData from '../types';

const getProducts = async (searchParams: string, skip: number, limit: number) => {
    let recentQuery;
    (searchParams) ?
      recentQuery = searchParams :
      recentQuery = ""

    const {
        data: products
    } = await getAllProducts(skip, limit, recentQuery)
    return products.products
  }

const getCategoriesType = async () => {
  const categories = await getCategories()
  return categories.data
}

const HandleValidation = async (query: string, category: string, start_range: number, end_range: number, brand: string, skip: number, limit: number) => {

  let filteredDataCategory: productData[] = [];
  let filteredDataPriceRange: productData[] = [];
  let filteredDataBrand: productData[] = [];
  
  const {
    data: products
  } = await getAllProducts(0, 0, query)

  if (category !== '') {
    products.products.map((item: any, index: any) => {
      if (item.category === category) {
        filteredDataCategory.push(item)
      }
    }
    ) 
  } else {
    filteredDataCategory = products.products
  }


  if (end_range !== 0) {
    filteredDataCategory.map((item: any, index: any) => {
      if (item.price <= end_range && item.price >= start_range) {
        filteredDataPriceRange.push(item)
      }
    }
    ) 
  } else {
    filteredDataPriceRange = filteredDataCategory
  }

  if (brand !== '') {
    
    filteredDataPriceRange.map((item: any, index: any) => {
      if (item.brand.toLowerCase() === brand.toLocaleLowerCase()) {
        console.log(item.brand.toLowerCase(), brand.toLowerCase())
        filteredDataBrand.push(item)
      }
    }
    ) 
  } else {
    filteredDataBrand = filteredDataPriceRange
  }

   return filteredDataBrand
  
}

export {
    getProducts,
    getCategoriesType,
    HandleValidation
}