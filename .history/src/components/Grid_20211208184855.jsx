import React from 'react'
import PropTypes from 'prop-types'

const Grid = props => {

    const style = {
        gap: props.gap ? `${props.gap}` : '0'
    }

    const col = props.col ? `grid-col-${props.col}` : ''
    const mdCol = props.mdCol ? `grid-col-${props.col}` : ''
    const smCol = props.smCol ? `grid-col-${props.col}` : ''



  return (
    <div className={`grid ${col} ${mdCol} ${smCol}`} style={style}>
        {props.children}
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
