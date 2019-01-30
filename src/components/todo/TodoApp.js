import React, { Component } from 'react'
import Title from './components/Title'
import Tasks from './containers/Tasks'
import Footer from './components/Footer'
import TodoInput from './components/TodoInput'
import './todo.css'
import { connect } from 'react-redux'
import { addTask } from './actions/actionCreator'

class TodoApp extends Component {
  render () {
    const { tasks } = this.props
    return (
      <div>
        <Title name='ToDo list' />
        <TodoInput onAdd={(val) => {
          this.props.addTask(Date.now(), val)
        }} />
        <Tasks records={tasks} />
        <Footer records={tasks} />
      </div>
    )
  }
}

export default connect(state => ({
  tasks: state.tasks
}), {
  addTask
})(TodoApp)
