import React, { Component } from 'react'

// eslint-disable-next-line jsx-a11y/anchor-has-content
const Link = (props) => (<a {...props} className='hoc-link' />)

export default class HighOrderComponentsExample extends Component {
  render () {
    return (
      <div>
        <Link href='#one'>One</Link>
        <Link href='#two'>Two</Link>
        <Link href='#three'>Three</Link>
      </div>
    )
  }
}
