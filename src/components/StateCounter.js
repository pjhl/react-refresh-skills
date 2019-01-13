import React, { Component } from 'react'

export default class StateCounter extends Component {
  state = {
    value: 0
  }
  handleClick = () => {
    this.setState(({ value }) => ({
      value: value + 1
    }))
  }
  render () {
    const { value } = this.state
    return <h1 onClick={this.handleClick}>{value}</h1>
  }
}
