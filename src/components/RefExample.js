import React, { Component } from 'react'

export default class RefExample extends Component {
  state = {
    name: 'Amelie',
    agree: true
  }
  nameRef = React.createRef()
  agreeRef = React.createRef()
  handleChange = () => {
    this.setState({
      name: this.nameRef.current.value,
      agree: this.agreeRef.current.checked
    })
  }
  handleSubmit = (e) => {
    e.preventDefault()
    console.log(this.state)
  }
  render () {
    const { name, agree } = this.state
    return (
      <form>
        <div>
          <label>
            Name:<br />
            <input ref={this.nameRef} type='text' name='name' value={name}
              onChange={this.handleChange} />
          </label>
        </div>
        <div>
          <input ref={this.agreeRef} type='checkbox' name='agree' id='agree'
            checked={agree} onChange={this.handleChange} />
          <label htmlFor='agree'>Agree</label>
        </div>
        <div>
          <button onClick={this.handleSubmit}>Log form</button>
        </div>
      </form>
    )
  }
}
