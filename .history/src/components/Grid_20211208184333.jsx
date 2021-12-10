import React from 'react'
import PropTypes from 'prop-types'

const Grid = props => {
  return (
    <div>
      
    </div>
  )
}

Grid.propTypes = {
    col: PropTypes.number.isRequired,
    mdCol: PropTypes.number,
    smCol: PropTypes.number,
    gap: PropTypes.number
}

export default Grid
