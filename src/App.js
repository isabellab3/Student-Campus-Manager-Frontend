import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

// these will be added to the barrel file index.js in utilities
// import AddStudent from "./components";
// import SingleCampus from "./components";

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
          <Route exact path="/campuses" component={DisplayCampusesContainer} />
          {/* <Route exact path="/student/:id" component={SingleCampus} /> */}
          {/* <Route exact path="/addstudent" component={AddStudent} /> */}
        </Switch>
        <footer>(Footer goes here)</footer>
      </Router>
    );
  }
}

export default App;
