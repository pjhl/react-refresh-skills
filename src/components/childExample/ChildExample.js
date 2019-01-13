import React, { Component } from 'react'
import Parent from './Parent'
import Child from './Child'

export default class ChildExample extends Component {
  render () {
    return (
      <Parent>
        <Child />
      </Parent>
    )
  }
}
