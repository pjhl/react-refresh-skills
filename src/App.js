import React, { Component } from 'react'
import StateCounter from './components/StateCounter'
import StatePropsCounter from './components/StatePropsCounter'
import ChildExample from './components/childExample'
import MenuExample from './components/menu/MenuExample'
import Events from './components/Events'

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
              <Events />
            </td>
            <td>Events example</td>
          </tr>
          <tr>
            <td className='center'>
              <MenuExample />
            </td>
            <td>Simple two-level menu example</td>
          </tr>
          <tr>
            <td className='center'>
              <ChildExample />
            </td>
            <td>Children elements example</td>
          </tr>
          <tr>
            <td className='center'>
              <StatePropsCounter />
            </td>
            <td>Stateful counter with props example</td>
          </tr>
          <tr>
            <td className='center'>
              <StateCounter />
            </td>
            <td>Simple stateful counter. Click on digit to increase counter</td>
          </tr>
        </tbody>
      </table>
    )
  }
}

export default App
