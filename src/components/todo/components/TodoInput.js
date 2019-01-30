import React, { Component } from 'react'
import PropTypes from 'prop-types'

export default class TodoInput extends Component {
  static propTypes = {
    value: PropTypes.string,
    onChange: PropTypes.func
  }
  static defaultprops = {
    value: '',
    onChange: () => {}
  }
  render () {
    const { value, onChange } = this.props
    return (
      <input
        type='text'
        value={value}
        onChange={onChange}
        className='todo-input'
        placeholder='Enter the task name'
      />
    )
  }
}
