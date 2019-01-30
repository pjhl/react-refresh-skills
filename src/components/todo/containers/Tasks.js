import React, { Component } from 'react'
import PropTypes from 'prop-types'
import TasksList from '../components/TasksList'

export default class Tasks extends Component {
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
    const { records } = this.props
    console.log('isCompleatedFilter:', isCompleatedFilter)
    return (
      <div>
        <TasksList records={records} />
      </div>
    )
  }
}
