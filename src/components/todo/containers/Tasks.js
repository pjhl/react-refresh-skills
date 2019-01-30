import React, { Component } from 'react'
import TasksList from '../components/TasksList'

// TODO: Use the mocked TASKS
/* eslint-disable-next-line no-unused-vars */
const TASKS = [
  {
    id: 1,
    text: 'Learn React',
    isCompleated: true
  }, {
    id: 2,
    text: 'Learn redux',
    isCompleated: false
  }, {
    id: 3,
    text: 'Create react-redux admin framework',
    isCompleated: false
  }
]

export default class Tasks extends Component {
  state = {
    filters: {
      isCompleated: null
    }
  }
  render () {
    const { filters: { isCompleated: isCompleatedFilter } } = this.state
    const tasks = TASKS
    console.log('isCompleatedFilter:', isCompleatedFilter)
    return (
      <div>
        <TasksList records={tasks} />
      </div>
    )
  }
}
