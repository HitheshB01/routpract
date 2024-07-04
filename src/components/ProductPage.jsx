import React from 'react'
import ProductCard from './ProductCard'

const ProductPage = () => {
  return (
    <div className="App">
      <header className="App-header">
        <div className="flex justify-center">
          <ProductCard />
          <ProductCard />
          <ProductCard />
        </div>
      </header>
    </div>
  )
}

export default ProductPage
