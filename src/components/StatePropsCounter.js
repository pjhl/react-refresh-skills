import React, { Component } from 'react'
import PropTypes from 'prop-types'

const Counter = ({ value }) => (
  <h1>{value}</h1>
)
Counter.propTypes = {
  value: PropTypes.number.isRequired
}

const Button = ({ text, clickHandler }) => (
  <button onClick={clickHandler}>{text}</button>
)
Button.propTypes = {
  text: PropTypes.string.isRequired,
  clickHandler: PropTypes.func
}
Button.defaultProps = {
  clickHandler: () => {}
}

export default class StatePropsCounter extends Component {
  state = {
    value: 0
  }
  increaseValue = () => {
    this.setState(({ value }) => ({
      value: value + 1
    }))
  }
  dencreaseValue = () => {
    this.setState(({ value }) => ({
      value: value > 1 ? value - 1 : 0
    }))
  }
  render () {
    return <div>
      <Counter value={this.state.value} />
      <Button text='-' clickHandler={this.dencreaseValue} />
      <Button text='+' clickHandler={this.increaseValue} />
    </div>
  }
}
