import React from 'react'
import { Provider } from 'react-redux'
import { store } from './store'
import User from './User'

export default () => (
  <Provider store={store}>
    <User />
  </Provider>
)
