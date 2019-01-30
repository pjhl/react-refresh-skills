import React, { Component } from 'react'
import Title from './components/Title'
import Tasks from './containers/Tasks'
import Footer from './components/Footer'
import TodoInput from './components/TodoInput'
import './todo.css'
import { connect } from 'react-redux'
import { addTask, changeFilter } from './actions/actionCreator'

class TodoApp extends Component {
  render () {
    const { tasks, filters, addTask, changeFilter } = this.props
    return (
      <div>
        <Title name='ToDo list' />
        <TodoInput onAdd={(val) => {
          addTask(Date.now(), val)
        }} />
        <Tasks records={tasks} />
        <Footer
          records={tasks}
          activeFilter={filters}
          onChangeFilter={changeFilter} />
      </div>
    )
  }
}

export default connect(state => ({
  tasks: state.tasks.filter(task => {
    if (state.filters) {
      const isActive = state.filters === 'active' && !task.isCompleated
      const isCompleated = state.filters === 'compleated' && task.isCompleated
      return isActive || isCompleated
    }
    return true
  }),
  filters: state.filters
}), {
  addTask,
  changeFilter
})(TodoApp)
