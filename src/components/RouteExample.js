import React, { Component, Fragment } from 'react'
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'

const Index = () => <h2>Home</h2>
const About = () => <h2>About</h2>
const Users = () => <h2>Users</h2>

export default class RouteExample extends Component {
  render () {
    return (
      <Router>
        <Fragment>
          <nav>
            <Link to='/'>Home</Link>{' '}
            <Link to='/about'>About</Link>{' '}
            <Link to='/users'>Users</Link>
          </nav>
          <div>
            <Switch>
              <Route path='/' exact component={Index} />
              <Route path='/about' component={About} />
              <Route path='/users' component={Users} />
            </Switch>
          </div>
        </Fragment>
      </Router>
    )
  }
}
