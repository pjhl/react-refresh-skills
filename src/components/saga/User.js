import React, { Component } from 'react'
import { action } from './store'
import { connect } from 'react-redux'

class User extends Component {
  render () {
    const { currentUser } = this.props
    return (
      <div>
        <h1>User</h1>
        { currentUser ? JSON.stringify(currentUser, undefined, 2) : null }
        <button onClick={() => action('USER_FETCH_REQUESTED', { id: 1 })}>Load</button>
      </div>
    )
  }
}

export default connect(state => ({
  currentUser: state.user
}))(User)
