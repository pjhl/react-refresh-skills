import React, { Component } from 'react'
import PropTypes from 'prop-types'

export default class TasksList extends Component {
  static propTypes = {
    records: PropTypes.array
  }
  static defaultProps = {
    records: []
  }
  onChangeCompleated = (e) => {
    const id = e.target.getAttribute('data-id')
    console.log('onChangeCompleated:', id)
  }
  render () {
    const { records } = this.props
    return (
      <ul className='tasks-list'>
        {records.map((record, index) => (
          <li key={index}>
            <input
              type='checkbox'
              checked={record.isCompleated}
              onChange={this.onChangeCompleated}
              data-id={record.id}
            />
            {record.text}
          </li>
        ))}
      </ul>
    )
  }
}
