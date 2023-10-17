import React from 'react'

interface PropsData {
    params: {slug: string[]};
    searchParams: {sortOrder: string};
  }

const ProductPage = ({params: {slug}, searchParams: {sortOrder}} : PropsData) => {
  return (
    <div>ProductPage, {slug} {sortOrder}</div>
  )
}

export default ProductPage