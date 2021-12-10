import React from 'react';

import Helmet from '../components/Helmet';
import Section, {SectionBody, SectionTitle} from '../components/Section';

import productData from '../assets/fake-data/products';


const Product = props => {

    const product = productData.getProductBySlug(props.match.params.slug)
    return (
        <Helmet title={product.title}>
            Product
        </Helmet>
    )
}

export default Product
