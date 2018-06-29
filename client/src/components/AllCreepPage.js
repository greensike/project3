import React, { Component } from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

class AllCreepPage extends Component {
    state = {
        user: [],
    }



  render() {
    return (
      <Router>
        <div>
          <Switch>
            <Route exact path="/" component={AllUsers} />
          </Switch>
        </div>
      </Router>
    )
  }
}

export default AllCreepPage