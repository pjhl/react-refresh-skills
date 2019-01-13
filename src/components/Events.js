import React, { Component } from 'react'
import PropTypes from 'prop-types'

const MyLink = ({ text, onClick }) => (
  <a href='#mylink' onClick={onClick}>{text}</a>
)
MyLink.propTypes = {
  text: PropTypes.string,
  onClick: PropTypes.func
}
MyLink.defaultProps = {
  text: 'link',
  onClick: () => {}
}

export default class Events extends Component {
  handleClick = (e) => {
    e.preventDefault()
    console.log('Clicked to link')
  }
  render () {
    return (
      <div>
        <MyLink text='MyLink_1' onClick={this.handleClick} />
      </div>
    )
  }
}
