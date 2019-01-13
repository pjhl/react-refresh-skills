import React from 'react'
import PropTypes from 'prop-types'

const Child = ({ value }) => (
  <h2>Child value: {value}</h2>
)
Child.propTypes = {
  value: PropTypes.number
}

export default Child
