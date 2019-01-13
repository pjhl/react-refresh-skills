import React, { Component } from 'react'
import PropTypes from 'prop-types'

export default class Parent extends Component {
  state = {
    value: 0
  }
  static propTypes = {
    children: PropTypes.element
  }
  handleClick = () => {
    this.setState(({ value }) => ({ value: value + 1 }))
  }
  render () {
    const { value } = this.state
    const { children } = this.props
    return (
      <div>
        {React.cloneElement(children, { value })}
        <h2>Parent value: {value}</h2>
        <button onClick={this.handleClick}>Add</button>
      </div>
    )
  }
}
