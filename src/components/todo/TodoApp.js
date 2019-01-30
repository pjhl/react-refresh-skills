import React, { Component } from 'react'
import Title from './components/Title'
import Tasks from './containers/Tasks'
import Footer from './components/Footer'
import TodoInput from './components/TodoInput'
import './todo.css'
import { Provider } from 'react-redux'
import store from './store'

export default class TodoApp extends Component {
  render () {
    return (
      <Provider store={store}>
        <div>
          <Title name='ToDo list' />
          <TodoInput onChange={() => { console.log('Input changed') }} />
          <Tasks />
          <Footer records={[]} />
        </div>
      </Provider>
    )
  }
}
