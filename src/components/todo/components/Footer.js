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
    records: PropTypes.array,
    onChangeFilter: PropTypes.func,
    activeFilter: PropTypes.string
  }
  static defaultProps = {
    records: [],
    onChangeFilter: () => {},
    activeFilter: null
  }
  render () {
    const { records, activeFilter, onChangeFilter } = this.props
    return (
      <div className='tasks-footer'>
        Displayed <strong>{records.length}</strong> records.
        Filter:
        {FILTER_BUTTONS.map(({ text, value }, index) => (
          <button
            type='button'
            key={index}
            className={activeFilter === value ? 'btn active' : 'btn'}
            onClick={() => {
              onChangeFilter(value)
            }}
          >
            {text}
          </button>
        ))}
      </div>
    )
  }
}
