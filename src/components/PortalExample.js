import React, { Component } from 'react'
import ReactDOM from 'react-dom'

const styles = {
  portalBlock: {
    color: 'white',
    position: 'fixed',
    width: 300,
    height: 230,
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    margin: 'auto',
    backgroundColor: 'rgba(0,0,0,0.8)',
    padding: 24
  }
}

class MyPortal extends Component {
  el = document.createElement('div')
  componentDidMount () {
    document.body.appendChild(this.el)
  }
  componentWillunmount () {
    document.body.removeChild(this.el)
  }
  render () {
    return ReactDOM.createPortal(this.props.children, this.el)
  }
}

export default class PortalExample extends Component {
  state = {
    modalText: null
  }
  handleShow = () => {
    this.setState({ modalText: 'This is a modal block created with ReactDOM portal.' })
  }
  handleClose = () => {
    this.setState({ modalText: null })
  }
  render () {
    const { modalText } = this.state
    return (
      <div>
        <button onClick={this.handleShow}>Show modal (portal)</button>
        { modalText && <MyPortal>
          <div style={styles.portalBlock}>
            <p>{modalText}</p>
            <button onClick={this.handleClose}>Close</button>
          </div>
        </MyPortal>}
      </div>
    )
  }
}
