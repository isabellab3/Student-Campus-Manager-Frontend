import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

// import AddStudent from './components/containers/AddStudent';
// import SingleCampus from "./components/containers/SingleCampus"

import {
  DisplayCampusesContainer,
  DisplayCampusesView,
  EditStudentContainer,
  EditStudentView
} from "./components";

class App extends Component {
  render() {
    return (
      <Router>
        <div>(Navbar goes here)</div>
        {/* It doesn't seem to recognize <navbar> */}
        <Switch>
          {/* <Route exact path="/" component={AddStudent} /> */}
          <Route exact path="/campuses" component={DisplayCampusesContainer} />
          {/* <Route exact path='/student/:id' component={SingleCampus} />
          <Route exact path='/addstudent' component={AddStudent} /> */}
        </Switch>
        <footer>(Footer goes here)</footer>
      </Router>
    );
  }
}

export default App;
