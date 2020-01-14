import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import './App.css';

// these will be added to the barrel file index.js in utilities
// import SingleCampus from "./components";

import {
  AddStudent,
  // SingleCampus,
  DisplayCampusesContainer,
  DisplayCampusesView,
  EditStudentContainer,
  EditStudentView
} from "./components";

class App extends Component {
  render() {
    return (
      <Router>
        <div className="navbar">
          <h1>Student Campus Manager</h1>
          <div className="navbar-links">
            <Link to="/">Home</Link>
            <Link to="/campuses">Campuses</Link> 
            <Link to="/addstudent">Add Student</Link>
          </div>
        </div>
        <Switch>
          <Route exact path="/campuses" component={DisplayCampusesContainer} />
          {/* <Route exact path="/student/:id" component={SingleCampus} /> */}
          {/* <Route exact path="/editcampus/:id" component={EditCampus} /> */}
          <Route exact path="/addstudent" component={AddStudent} />
        </Switch>
        <footer>(Footer goes here)</footer>
      </Router>
    );
  }
}

export default App;
