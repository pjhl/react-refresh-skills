import React, { Component } from 'react'
import PropTypes from 'prop-types'

export default class Menu extends Component {
  static propTypes = {
    children: PropTypes.oneOfType([
      PropTypes.element,
      PropTypes.arrayOf(PropTypes.element)
    ]).isRequired
  }
  render () {
    const { children } = this.props
    return (
      <ul className='menu'>
        {React.Children.toArray(children).map((el, index) => (el))}
      </ul>
    )
  }
}
