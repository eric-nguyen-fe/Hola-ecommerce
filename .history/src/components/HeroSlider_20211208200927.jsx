import React from 'react'
import PropTypes from 'prop-types'

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

    </div>
)

export default HeroSlider
