import React from 'react'
import AddToCart from '../AddToCart';
import Style from './ProductCard.module.css';

const ProductCard = () => {
  return (
    <div className={Style.card}>
        <AddToCart/>
    </div>
  )
}

export default ProductCard