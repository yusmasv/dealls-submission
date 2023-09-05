import React from 'react'
import { useSearchParams } from 'react-router-dom';

function Product() {
const [searchParams, setSearchParams] = useSearchParams(window.location.search);

console.log(searchParams.get('q'))
  return (
    <div>Product</div>
  )
}

export default Product