import React, { Component } from 'react'
import PropTypes from 'prop-types'
import TasksList from '../components/TasksList'
import { removeTask } from '../actions/actionCreator'
import { connect } from 'react-redux'

class Tasks extends Component {
  state = {
    filters: {
      isCompleated: null
    }
  }
  static propTypes = {
    records: PropTypes.array
  }
  render () {
    const { filters: { isCompleated: isCompleatedFilter } } = this.state
    const { records, removeTask } = this.props
    console.log('isCompleatedFilter:', isCompleatedFilter)
    return (
      <div>
        <TasksList records={records} onRemove={removeTask} />
      </div>
    )
  }
}

export default connect(null, {
  removeTask
})(Tasks)
