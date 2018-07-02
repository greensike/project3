import React, { Component } from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import AllUsers from './components/AllUsers'
// import UserCard from './components/UserCard';
import UserAndCreep from './components/UserAndCreep';
import newUserForm from './components/newUserForm';
import NewCreep from './components/NewCreep';
import updateUserForm from './components/UpdateUserForm';
// import Creep from './components/Creep'

class App extends Component {

  userAndCreepWrap = (props) => (
    <UserAndCreep {...props} />
  )

  render() {
    return (
      <Router>
        <div>
          <Switch>
            <Route exact path="/" component={AllUsers} />
            <Route exact path="/user/new" component= {newUserForm} />
            <Route exact path="/user/:id/newCreep" component= {NewCreep} />
            <Route exact path="/user/:id/updateUserForm" component= {updateUserForm} />
            <Route exact path="/user/:id" render={this.userAndCreepWrap} />

          </Switch>
        </div>
      </Router>
    )
  }
}

export default App