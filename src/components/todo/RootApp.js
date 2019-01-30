import React from 'react'
import TodoApp from './TodoApp'
import { Provider } from 'react-redux'
import store from './store'

export default () => (
  <Provider store={store}>
    <TodoApp />
  </Provider>
)
