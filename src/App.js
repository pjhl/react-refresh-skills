import React, { Component } from 'react'
import StateCounter from './components/StateCounter'
import StatePropsCounter from './components/StatePropsCounter'
import ChildExample from './components/childExample'
import MenuExample from './components/menu/MenuExample'
import Events from './components/Events'
import FormExample from './components/FormExample'
import RefExample from './components/RefExample'
import HighOrderComponentsExample from './components/HighOrderComponentsExample'
import HOCLoaderExample from './components/HOCLoaderExample'
import PortalExample from './components/PortalExample'
import ContextExample from './components/ContextExample'
import RouteExample from './components/RouteExample'
import TodoApp from './components/todo/TodoApp'

class App extends Component {
  render () {
    return (
      <table className='App-table'>
        <thead>
          <tr>
            <th style={{ minWidth: 550 }}>Example</th>
            <th>Description</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className='center'>
              <TodoApp />
            </td>
            <td>Todo application</td>
          </tr>
          <tr>
            <td className='center'>
              <RouteExample />
            </td>
            <td>React-router-dom simple example</td>
          </tr>
          <tr>
            <td className='center'>
              <ContextExample />
            </td>
            <td>React context example</td>
          </tr>
          <tr>
            <td className='center'>
              <PortalExample />
            </td>
            <td>Modal block example with ReactDOM portal</td>
          </tr>
          <tr>
            <td className='center'>
              <HOCLoaderExample />
            </td>
            <td>Loader with High Order Components (HOC) example</td>
          </tr>
          <tr>
            <td className='center'>
              <HighOrderComponentsExample />
            </td>
            <td>High Order Components simple example</td>
          </tr>
          <tr>
            <td className='center'>
              <RefExample />
            </td>
            <td>Ref example</td>
          </tr>
          <tr>
            <td className='center'>
              <FormExample />
            </td>
            <td>Form example</td>
          </tr>
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
