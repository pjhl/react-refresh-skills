import React, { Component } from 'react'
import PropTypes from 'prop-types'

export default class TodoInput extends Component {
  state = {
    value: ''
  }
  static propTypes = {
    onAdd: PropTypes.func
  }
  static defaultprops = {
    onAdd: () => {}
  }
  onChange = (e) => {
    this.setState({ value: e.target.value })
  }
  onKeyPress = (e) => {
    if (e.key === 'Enter') {
      e.preventDefault()
      const { value } = this.state
      if (value) {
        this.setState({ value: '' })
        this.props.onAdd(value)
      }
    }
  }
  render () {
    const { value } = this.state
    return (
      <input
        type='text'
        value={value}
        onChange={this.onChange}
        onKeyPress={this.onKeyPress}
        className='todo-input'
        placeholder='Enter the task name'
      />
    )
  }
}
