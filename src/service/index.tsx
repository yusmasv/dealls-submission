import { useState } from 'react';
import { getAllCart, getAllProducts, getCategories } from '../repository';
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
  let filteredDataQuery: productData[] = [];
  let filteredDataCategory: productData[] = [];
  let filteredDataPriceRange: productData[] = [];
  let filteredDataBrand: productData[] = [];
  let filteredDataPagination: productData[] = [];
  
  const {
    data: products
  } = await getAllProducts(0, 0, query)
  filteredDataQuery = products.products;

  if (category !== '') {
   filteredDataQuery.map((item: any, index: any) => {
      if (item.category === category) {
        filteredDataCategory.push(item)
      }
    }
    ) 
  } else {
    filteredDataCategory = filteredDataQuery
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

  if (filteredDataBrand.length >= limit) {
    let counter = 0;
    filteredDataBrand.map((item, index) => {
      
      if (index >= skip && counter < limit) {
        filteredDataPagination.push(item)
        counter++
      }
    })
    
  } else {
    filteredDataPagination = filteredDataBrand
  }
   let length = filteredDataBrand.length
   return {filteredDataPagination, length}
  
}

const getCart = async () => {
  const {
      data: carts
  } = await getAllCart()
  return carts.carts
}

export {
    getProducts,
    getCategoriesType,
    HandleValidation,
    getCart
}