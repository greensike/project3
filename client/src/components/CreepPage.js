import React, { Component } from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

class CreepPage extends Component {
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

export default CreepPage