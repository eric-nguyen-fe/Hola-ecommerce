import React from 'react';

import Helmet from '../components/Helmet';

import productData from '../assets/fake-data/products';


const Product = () => {

    const product = productData.getProductBySlug
    return (
        <div>
            Product
        </div>
    )
}

export default Product
