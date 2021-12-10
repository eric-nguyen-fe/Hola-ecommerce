import React, {useState} from 'react'
import PropTypes from 'prop-types'

const ProductView = props => {

    const product = props.product

    const [previewImg, setpreviewImg ] = useState(product.image01);

    return (
        <div className="product">
            <div className="product__images">
                <div className="product__images_list">
                    <div className="product__image__list__item" onClick={() => setpreviewImg(product.image01)}>
                        <img src={product.image01} alt=""/>
                    </div>
                    <div className="product__image__list__item"onClick={() => setpreviewImg(product.image02)}>
                        <img src={product.image02} alt=""/>
                    </div>
                </div>
                <div className="product__images__main">
                <img src={previewImg} alt=""/>
                </div>
            </div>
        </div>
    )
}

ProductView.propTypes = {
    product: PropTypes.object.isRequired,

}

export default ProductView
