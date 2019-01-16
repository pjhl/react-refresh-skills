import React, { Component } from 'react'

const TitleContext = React.createContext()

const LevelThree = () => ({
  render () {
    const { title } = this.context
    return (
      <h1>{title}</h1>
    )
  }
})
LevelThree.contextType = TitleContext
const LevelTwo = () => (<LevelThree />)
const LevelOne = () => (<LevelTwo />)

export default class ContextExample extends Component {
  state = {
    value: 0
  }
  handleClick = () => {
    this.setState(({ value }) => ({ value: value + 1 }))
  }
  render () {
    const { value } = this.state
    return (
      <TitleContext.Provider value={{ title: `Clicks: ${value}` }}>
        <LevelOne />
        <button onClick={this.handleClick}>Increase</button>
      </TitleContext.Provider>
    )
  }
}
