import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import './App.css';

// these will be added to the barrel file index.js in utilities
// import SingleCampus from "./components";

import {
  AddStudent,
  // SingleCampus,
  Homepage,
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
        <div className="home-body">
          <div className="navbar">
            <Link to="/"><h1>Student Campus Manager</h1></Link>
            <div className="navbar-links">
              <Link to="/">Home</Link>
              <Link to="/campuses">Campuses</Link> 
              <Link to="/addstudent">Add Student</Link>
            </div>
          </div>

          <Route exact path="/" component={Homepage} />
          
          <div className="home-content" id="nonhome">
          <Switch>
            <Route exact path="/campuses" component={AllCampusesContainer} />
            {/* <Route exact path="/student/:id" component={SingleCampus} /> */}
            {/* <Route exact path="/editcampus/:id" component={EditCampus} /> */}
            <Route exact path="/editstudent/:id" component={EditStudentContainer} />
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
          </div>

          <div className="footer">
            <b>Made in the January 2020 CUNY 2X/TTP Bootcamp | Made by Darren Zhang, Eva Yan, Isabella Berekdar, and Samson Wu</b>
          </div>
        </div>
      </Router>
    );
  }
}

export default App;
