import React from 'react'

import Helmet from '../components/Helmet';
import Grid from '../components/Grid';

const Catalog = () => {
    return (
        <Helmet title="Sản phẩm">
            <div className="catalog">
                <div className="catalog__filter"></div>
                <div className="catalog__content"></div>
            </div>
        </Helmet>
    )
}

export default Catalog
