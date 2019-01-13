import React, { Component } from 'react'
import Menu from './Menu'
import MenuItem from './MenuItem'

export default class MenuExample extends Component {
  render () {
    return (
      <Menu>
        <MenuItem name='Home' />
        <MenuItem name='Page1' />
        <MenuItem name='Other pages'>
          <MenuItem name='Page3' />
          <MenuItem name='Page4' />
        </MenuItem>
      </Menu>
    )
  }
}
