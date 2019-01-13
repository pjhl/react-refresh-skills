import React, { Component } from 'react'
import PropTypes from 'prop-types'

export default class MenuItem extends Component {
  static propTypes = {
    name: PropTypes.string.isRequired,
    children: PropTypes.oneOfType([
      PropTypes.element,
      PropTypes.arrayOf(PropTypes.element)
    ])
  }
  renderChildren () {
    const children = React.Children.toArray(this.props.children)
    if (children.length === 0) {
      return null
    }
    return (
      <ul className='menu'>
        {children}
      </ul>
    )
  }
  render () {
    const { name } = this.props
    return (
      <li>
        <a href='#1'>{name}</a>
        {this.renderChildren()}
      </li>
    )
  }
}
