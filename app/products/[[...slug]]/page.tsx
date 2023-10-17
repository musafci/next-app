import React from 'react'

interface PropsData {
    params: {slug: string[]}
}

const ProductPage = ({params: {slug}} : PropsData) => {
  return (
    <div>ProductPage, {slug}</div>
  )
}

export default ProductPage