import React, { Component, Fragment } from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  NavLink
} from 'react-router-dom'

const Index = () => <h2>Home</h2>
const About = () => <h2>About</h2>
const Users = () => <h2>Users</h2>
const User = ({ match: { params } }) => <h2>User #{params.id}</h2>
const Error = () => <h2>404 Not Found</h2>

export default class RouteExample extends Component {
  render () {
    return (
      <Router>
        <Fragment>
          <nav>
            <Link to='/'>Home</Link>{' '}
            <Link to='/about'>About</Link>{' '}
            <Link to='/users'>Users</Link>{' '}
            <Link to='/users/45'>User #45</Link>{' '}
            <Link to='/some-unexistance/url'>404</Link>
          </nav>
          <nav>
            <NavLink to='/' exact>Home</NavLink>{' '}
            <NavLink to='/about'>About</NavLink>{' '}
            <NavLink to='/users'>Users</NavLink>{' '}
          </nav>
          <div>
            <Switch>
              <Route path='/' exact component={Index} />
              <Route path='/about' component={About} />
              <Route path='/users' exact component={Users} />
              <Route path='/users/:id' component={User} />
              <Route path='*' component={Error} />
            </Switch>
          </div>
        </Fragment>
      </Router>
    )
  }
}
