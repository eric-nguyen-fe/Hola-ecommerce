import React from 'react'

import ProductView from './ProductView'
import Button from './Button'

import productData from '../assets/fake-data/products'

const ProductViewModal = () => {

    const product = productData.getProductBySlug('quan-jean-phong-cach-18')



  return (
    <div className="product-view__modal">
        <div className="product-view__modal__content">
            <ProductView product={product}/>
        </div>
    </div>
  )
}

export default ProductViewModal
