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
    const { records } = this.props
    return (
      <div className='tasks-footer'>
        Displayed {records.count} of {records.count} records.<br />
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
