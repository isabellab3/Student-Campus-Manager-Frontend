import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import './App.css';
/* Can probably make a barrel file for the images? */
import headerimg from './images/home_header.jpg';
import campusimg from './images/home_campus.png';
import studentsimg from './images/home_students.png';
import editimg from './images/home_edit.png';


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
    console.log(headerimg);
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

          <div className="header">
            <img src={headerimg} alt="header image" id="header" height="200px" width="100%"/>
            <div class="centered">
              <p>Manage your students and campuses with this web application!</p>
              <p>Click '<b>Campuses</b>' at the top to view all current campuses.</p>
              <p>Click '<b>Students</b>' at the top to view all current students</p>
            </div>
          </div>

          <div className="home-content">
            <div className="row">
              <div className="column">
                <img src={campusimg} alt="campus icon" width="200px"/> <br></br>
                Add and View Campuses
              </div>
              <div className="column">
                <img src={studentsimg} alt="students icon" width="200px"/> <br></br>
                Add and View Students
              </div>
              <div className="column">
                <img src={editimg} alt="edit icon" width="200px"/> <br></br>
                Edit Existing Students or<br></br> Campuses At Any Time
              </div>
            </div>
          </div>

          <Switch>
            <Route exact path="/campuses" component={DisplayCampusesContainer} />
            {/* <Route exact path="/student/:id" component={SingleCampus} /> */}
            {/* <Route exact path="/editcampus/:id" component={EditCampus} /> */}
            <Route exact path="/addstudent" component={AddStudent} />
          </Switch>

          <div className="footer">
            <b>Made in the January 2020 CUNY 2X/TTP Bootcamp | Made by Darren Zhang, Eva Yan, Isabella Berekdar, and Samson Wu</b>
          </div>
        </div>
      </Router>
    );
  }
}

export default App;
