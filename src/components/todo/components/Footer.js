import React, { Component } from 'react'
import PropTypes from 'prop-types'

const FILTER_BUTTONS = [
  {
    text: 'All',
    value: null
  },
  {
    text: 'Active',
    value: 'active'
  },
  {
    text: 'Compleated',
    value: 'compleated'
  }
]

export default class Footer extends Component {
  static propTypes = {
    records: PropTypes.array.isRequired
  }
  render () {
    // TODO: Remove this mocked var
    const activeFilter = null
    return (
      <div className='tasks-footer'>
        Displayed {'0'} of {'0'} records.<br />
        Filter:
        {FILTER_BUTTONS.map(({ text, value }, index) => (
          <button
            key={index}
            className={activeFilter === value ? 'btn active' : 'btn'}
            type='button'>
            {text}
          </button>
        ))}
      </div>
    )
  }
}
