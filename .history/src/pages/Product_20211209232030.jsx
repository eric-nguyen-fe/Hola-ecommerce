import React from 'react';

import Helmet from '../components/Helmet';
import Section, {SectionBody, SectionTitle} from '../components/Section';
import Grid from '../components/Grid';
import ProductCard from '../components/ProductCard';


import productData from '../assets/fake-data/products';


const Product = props => {

    const product = productData.getProductBySlug(props.match.params.slug)

    const relatedProducts = productData.getProducts(8)

    return (
        <Helmet title={product.title}>
            <Section>
                <SectionBody>
                    {
                        product.title
                    }
                </SectionBody>
            </Section>
            <Section>
                <SectionTitle>
                    Kham pha them
                </SectionTitle>
                <SectionTitle>

                </SectionTitle>
            </Section>
        </Helmet>
    )
}

export default Product
