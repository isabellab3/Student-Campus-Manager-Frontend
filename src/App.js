import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

// these will be added to the barrel file index.js in utilities
// import SingleCampus from "./components";

import {
  AddStudent,
  // SingleCampus,
  AllCampusesContainer,
  EditStudentContainer,
  EditCampusContainer,
  AllStudentsContainer,
  AddCampusContainer,
  SingleStudentContainer
} from "./components";

class App extends Component {
  render() {
    return (
      <Router>
        <div>(Navbar goes here)</div>
        {/* It doesn't seem to recognize <navbar> */}
        <Switch>
          <Route exact path="/campuses" component={AllCampusesContainer} />
          {/* <Route exact path="/student/:id" component={SingleCampus} /> */}
          {/* <Route exact path="/editcampus/:id" component={EditCampus} /> */}
          <Route
            exact
            path="/editstudent/:id"
            component={EditStudentContainer}
          />
          <Route exact path="/addstudent" component={AddStudent} />

          {/* URLs for forms editing an individual entry will also need an id */}
          {/* ALSO feel free to change the path */}
          <Route exact path="/editcampus" component={EditCampusContainer} />
          <Route exact path="/allstudents" component={AllStudentsContainer} />
          <Route exact path="/addcampus" component={AddCampusContainer} />
          <Route
            exact
            path="/singlestudent"
            component={SingleStudentContainer}
          />
        </Switch>
        <footer>(Footer goes here)</footer>
      </Router>
    );
  }
}

export default App;
