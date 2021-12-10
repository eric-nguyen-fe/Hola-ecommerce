import React from 'react'
import PropTypes from 'prop-types'

const HeroSlider = props => {

    const data = props.data

  return (
    <div className="hero-slider">
        {
            props.data
        }
    </div>
  )
}

HeroSlider.propTypes = {
    data: PropTypes.array.isRequired
}

export default HeroSlider
