import React, { Component } from 'react'
import StateCounter from './components/StateCounter'
import StatePropsCounter from './components/StatePropsCounter'

class App extends Component {
  render () {
    return (
      <table className='App-table'>
        <thead>
          <tr>
            <th style={{ minWidth: 250 }}>Example</th>
            <th>Description</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className='center'>
              <StateCounter />
            </td>
            <td>Simple stateful counter. Click on digit to increase counter</td>
          </tr>
          <tr>
            <td className='center'>
              <StatePropsCounter />
            </td>
            <td>Stateful counter with props example</td>
          </tr>
        </tbody>
      </table>
    )
  }
}

export default App
