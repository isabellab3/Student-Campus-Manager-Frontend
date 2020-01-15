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
      errors: {} // array of custom errors key: value pairs to display depending on which field has the error
    }
  }

  handleValidation = event => {
    let formIsValid = true;
    let errors = {}; //local variable

    const { first, last, gpa, url, email, campus } = this.state;
    console.log(first.trim);
    if(first.trim() == "") {
      formIsValid = false;
      errors["first"] = "First name input cannot be empty.";
    }
    if(last.trim() == "") {
      formIsValid = false;
      errors["last"] = "Last name input cannot be empty.";
    }
    if(gpa < 0 || gpa > 4) {
      formIsValid = false;
      errors["gpa"] = "GPA must be between 0.0 and 4.0."
    }

    //Set error messages
    this.setState({errors: errors});
    return(formIsValid);
  }

  // Need to redirect to that single student's page
  handleSubmit = event => {
    event.preventDefault()
    const { first, last, gpa, url, email, campus } = this.state
    
    if(this.handleValidation()) {
      const newStudent = {
        firstName: first,
        lastName: last,
        gpa: parseFloat(gpa),
        image: url,
        email: email
        /*       campus: campus
         */
      }
  
      // Add student to campus' list of student
  
      // needs validation
      this.props.addStudent(newStudent)
    }

    else {
    }
  }

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
        campusesList={this.props.campusesList}  // comes from redux store
        errors={this.state.errors}
      />
    );
  }
}

const mapState = state => {
  return {
    campusesList: state.campusesReducer.allCampuses
  };
};

const mapDispatch = dispatch => {
  return {
    addStudent: newStudent => dispatch(addStudent(newStudent))
  };
};

export default connect(mapState, mapDispatch)(AddStudent);
