import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom';

const HeroSlider = props => {

    const data = props.data

  return (
    <div className="hero-slider">
        {
            data.map((item, index) => (
                <HeroSliderItem key={index} item={item} />
            ))
        }
    </div>
  )
}

HeroSlider.propTypes = {
    data: PropTypes.array.isRequired
}

const HeroSliderItem = props => (
    <div className="hero-slider__item">
        <div className="hero-slider__item__info">
            <div className="hero-slider__item__info_title">
                <span>{props.item.title}</span>
            </div>
            <div className="hero-slider__item__info_description">
                <span>{props.item.description}</span>
            </div>
            <div className="hero-slider__item__info_btn">
                <Link to={props.item.path}>
                    <button>Xem chi tiết</button>
                </Link>
            </div>
        </div>
        <div className="hero-slider__item__image">
            <img src={props.itemm.img} alt=""/>
        </div>
    </div>
)

export default HeroSlider
