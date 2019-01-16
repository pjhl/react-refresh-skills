import React, { Component } from 'react'

const styles = {
  form: {
    textAlign: 'left',
    padding: 16
  },
  label: {
    display: 'block'
  }
}

export default class FormExample extends Component {
  state = {
    name: '',
    text: '',
    checkbox: false
  }
  handleChangeName = ({ target: { value } }) => {
    this.setState({ name: value })
  }
  handleChangeText = ({ target: { value } }) => {
    this.setState({ text: value })
  }
  handleChangeCheckbox = ({ target: { checked } }) => {
    this.setState({ checkbox: checked })
  }
  handleLog = (e) => {
    e.preventDefault()
    console.log('State:', this.state)
  }
  render () {
    return (
      <form style={styles.form}>
        <label style={styles.label}>
          Name: <br />
          <input type='text' name='name' onChange={this.handleChangeName} />
        </label>
        <label style={styles.label}>
          Text: <br />
          <textarea name='text' rows={2}
            onChange={this.handleChangeText} />
        </label>
        <input type='checkbox' name='checkbox' id='checkbox'
          onChange={this.handleChangeCheckbox} />
        <label htmlFor='checkbox'>Checkbox</label>
        <br />
        <button onClick={this.handleLog}>Log to console</button>
      </form>
    )
  }
}
