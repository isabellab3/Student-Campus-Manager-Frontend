import React, { Component } from "react";
import { connect } from "react-redux";
import { addStudent } from "../../store/utilities/Student"; // Get the action creator for students
import AddStudentView from "../views/AddStudentView";

class AddStudent extends Component {
  // Use local state to keep track of form input
  constructor(props) {
    super(props);
    this.state = {
      first: "",
      last: "",
      gpa: 0.0,
      url: "",
      email: "",
      campus: "",
      errors: {}, // array of custom errors key: value pairs to display depending on which field has the error
      // Attempted form validation...
      firstStatus: "",
      lastStatus: "",
      emailStatus: "",
      gpaStatus: ""
    }
  }

  handleValidation = event => {
    let formIsValid = true;
    let errors = {}; //local variable
    let firstTemp = "";
    let lastTemp = "";
    let gpaTemp = "";

    const { first, last, gpa, url, email, campus } = this.state;
    console.log(first.trim);
    if (first.trim() == "") {
      formIsValid = false;
      errors["first"] = "First name input cannot be empty.";
      firstTemp = "error-border";
    }
    if (last.trim() == "") {
      formIsValid = false;
      errors["last"] = "Last name input cannot be empty.";
      lastTemp = "error-border";
    }
    if(gpa < 0 || gpa > 4) {
      formIsValid = false;
      errors["gpa"] = "GPA must be between 0.0 and 4.0.";
      gpaTemp = "error-border";
    }

    //Set error messages
    this.setState({
      errors: errors,
      firstStatus: firstTemp,
      lastStatus: lastTemp,
      gpaStatus: gpaTemp
    });
    return(formIsValid);
  }

  // Need to redirect to that single student's page
  handleSubmit = event => {
    event.preventDefault()
    const { first, last, gpa, url, email, campus } = this.state
    
    if(this.handleValidation()) { // If the form works
      const newStudent = {
        firstName: first,
        lastName: last,
        gpa: parseFloat(gpa),
        image: url,
        email: email
        /*       campus: campus
         */
      };

      // Add student to campus' list of student


      // Add student to the database
      // needs validation
      this.props.addStudent(newStudent)
    }

    else { // If the form doesn't work
    }
  };

  handleChange = event => {
    this.setState({
      [event.target.name]: event.target.value // makes form input correspond to local state values
    });
  };

  render() {

    return (
      <AddStudentView
        handleSubmit={this.handleSubmit}
        handleChange={this.handleChange}
        campusesList={this.props.campusesList} // comes from redux store
        errors={this.state.errors}
        firstStatus={this.state.firstStatus}
        lastStatus={this.state.lastStatus}
        gpaStatus={this.state.gpaStatus}
      />
    );
  }
}

const mapState = state => {
  return {
    campusesList: state.campusReducer.allCampuses
  };
};

const mapDispatch = dispatch => {
  return {
    addStudent: newStudent => dispatch(addStudent(newStudent))
  };
};

export default connect(mapState, mapDispatch)(AddStudent);
