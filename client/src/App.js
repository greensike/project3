import React, { Component } from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import AllUsers from './components/AllUsers'
import UserCard from './components/UserCard';
import UserAndCreep from './components/UserAndCreep';
// import Creep from './components/Creep'

class App extends Component {
  render () {
    return (
      <Router>
        <div>
          <Switch>
            <Route exact path="/" component={AllUsers}/>
            {/* <Route path="/:id" component={UserAndCreep}/> */}
          </Switch>
        </div>
      </Router>
    )
  }
}

export default App