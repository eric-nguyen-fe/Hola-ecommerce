import React, {useState} from 'react'

import Helmet from '../components/Helmet';
import Grid from '../components/Grid';
import ProductCard from '../components/ProductCard';
import CheckBox from '../components/CheckBox';

import productData from '../assets/fake-data/product';
import category from '../assets/fake-data/category';
import colors from '../assets/fake-data/product-color.js';
import size from '../assets/fake-data/product-size';
import Button from '../components/Button';


const Catalog = () => {

    const initFilter = {
        category: [],
        color: [],
        size: [],
    }

    const productList =  productData.getAllProducts()

    const [products, setProducts] = useState(productList)

    const[filter, setFilter] = useState(initalFilter)

    const filterSelect = (type, checked, item) => {
        if(checked) {
            switch(type) {
                case "CATEGORY":
                    setFilter({...filter, category: [...filter.category, item.categorySlug]})
                    break
                case "COLOR":
                    setFilter({...filter, color: [...filter.color, item.color]})
                    break
                case "SIZE":
                    setFilter({...filter, size: [...filter.size, item.size]})
                    break
                default:
            } else {
                switch(type) {
                    case "CATEGORY":
                        const newCategory = filter.category.filter(e => e !== item.categorySlug)
                        setFilter({...filter, category: newCategory})
                        break
                    case "COLOR":
                        const newColor = filter.color.filter(e => e !== item.color)
                        setFilter({...filter, color: newColor})
                        break
                    case "SIZE":
                        const newSize = filter.size.filter(e => e !== item.size)
                        setFilter({...filter, size: newSize})
                        break
                    default:
                }
            }
        }
    }

    return (
        <Helmet title="Sản phẩm">
            <div className="catalog">
                <div className="catalog__filter">
                    <div className="catalog__filter__widget">
                        <div className="catalog__filter__widget__title">
                            Danh mục sản phẩm
                        </div>
                        <div className="catalog__filter__widget__content">
                            {
                                category.map((item, index) => (
                                    <div 
                                        key={index}
                                        className="catalog__filter__widget__content__item">
                                        <CheckBox
                                            label={item.display}
                                        />
                                    </div>
                                ))
                            }
                        </div>
                    </div>

                    <div className="catalog__filter__widget">
                        <div className="catalog__filter__widget__title">
                            Màu sắc
                        </div>
                        <div className="catalog__filter__widget__content">
                            {
                                colors.map((item, index) => (
                                    <div 
                                        key={index}
                                        className="catalog__filter__widget__content__item">
                                        <CheckBox
                                            label={item.display}
                                        />
                                    </div>
                                ))
                            }
                        </div>
                    </div>

                    <div className="catalog__filter__widget">
                        <div className="catalog__filter__widget__title">
                            Kích cỡ
                        </div>
                        <div className="catalog__filter__widget__content">
                            {
                                size.map((item, index) => (
                                    <div 
                                        key={index}
                                        className="catalog__filter__widget__content__item">
                                        <CheckBox
                                            label={item.display}
                                        />
                                    </div>
                                ))
                            }
                        </div>
                    </div>
                    
                    <div className="catalog__filter__widget">
                        <div className="catalog__filter__widget__content">
                            <Button size="sm">
                                Xóa bộ lọc
                            </Button>
                        </div>
                    </div>



                </div>
                <div className="catalog__content">
                    <Grid
                        col={3}
                        mdCol={2}
                        smCol={1}
                        gap={20}
                    >
                        {
                            productData.getAllProducts().map((item, index) => (
                                <ProductCard
                                    key={index}
                                    img01={item.image01}
                                    img02={item.image02}
                                    name={item.title}
                                    price={Number(item.price)}
                                    slug={item.slug}

                                />
                            ))
                        }

                    </Grid>
                </div>
            </div>
        </Helmet>
    )
}

export default Catalog
