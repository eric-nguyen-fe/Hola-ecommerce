import React from 'react'
import PropTypes from 'prop-types'

const CheckBox = props => {
    return (
        <label className="custom-checkbox">
            
        </label>
    )
}

CheckBox.propTypes = {
    label: PropTypes.string.isRequired,
    checked: PropTypes.bool
}

export default CheckBox
