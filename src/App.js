import React, { Component } from "react"
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
import AddStudent from './components/containers/AddStudent'
class App extends Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route exact path='/' component={AddStudent} />
        </Switch>
      </Router>
    )
  }
}

export default App
