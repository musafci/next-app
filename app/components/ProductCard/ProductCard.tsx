import React from 'react'
import AddToCart from '../AddToCart';

const ProductCard = () => {
  return (
    <div className='p-4 my-4 bg-sky-300 font-bold text-white text-center hover:bg-sky-500'>
        <AddToCart/>
    </div>
  )
}

export default ProductCard