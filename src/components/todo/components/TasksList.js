import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { updateTask } from '../actions/actionCreator'
import { connect } from 'react-redux'

class TasksList extends Component {
  static propTypes = {
    records: PropTypes.array,
    onRemove: PropTypes.func
  }
  static defaultProps = {
    records: [],
    onRemove: (id) => {}
  }
  onChangeCompleated = (e) => {
    const id = Number(e.target.getAttribute('data-id'))
    this.props.updateTask(id, {
      isCompleated: e.target.checked
    })
  }
  render () {
    const { records, onRemove } = this.props
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
            <button className='tasks-list-remove' onClick={() => {
              onRemove(record.id)
            }}>✘</button>
          </li>
        ))}
      </ul>
    )
  }
}

export default connect(null, {
  updateTask
})(TasksList)
