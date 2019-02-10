import React, { Component } from 'react'
import { Provider } from 'react-redux'
import store from './store'
import ContactForm from './ContactForm'

export default class ReduxForm extends Component {
  submit = values => {
    console.log('Submit values: ', values)
  }
  render () {
    return (
      <Provider store={store}>
        <ContactForm onSubmit={this.submit} />
      </Provider>
    )
  }
}
