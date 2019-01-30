import React, { Component } from 'react'
import PropTypes from 'prop-types'
import TasksList from '../components/TasksList'
import { removeTask } from '../actions/actionCreator'
import { connect } from 'react-redux'

class Tasks extends Component {
  static propTypes = {
    records: PropTypes.array
  }
  render () {
    const { records, removeTask } = this.props
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
