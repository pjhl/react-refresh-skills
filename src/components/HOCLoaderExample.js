import React, { Component } from 'react'

const MyComponent = (props) => ({
  render () {
    return (
      <p>MyComponent</p>
    )
  }
})

const LoadingHOC = (loadingProp) => (WrappedComponent) => {
  return class LoadingHOC extends Component {
    render () {
      return this.props[loadingProp]
        ? <div className='loader'>Loading...</div>
        : <WrappedComponent {...this.props} />
    }
  }
}

const WrappedComponent = LoadingHOC('isLoading')(MyComponent)

export default class HOCLoaderExample extends Component {
  state = {
    isLoading: true,
    data: null
  }
  componentDidMount () {
    /* global fetch */
    fetch('https://jsonplaceholder.typicode.com/todos/1')
      .then(response => response.json())
      .then(this.updateData)
  }
  updateData = (data) => {
    setTimeout(() => {
      this.setState({
        isLoading: false,
        data
      })
    }, 1000)
  }
  render () {
    const { data, isLoading } = this.state
    return (
      <WrappedComponent data={data} isLoading={isLoading} />
    )
  }
}
