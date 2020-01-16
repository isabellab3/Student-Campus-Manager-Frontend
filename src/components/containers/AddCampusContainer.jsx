import React, { Component } from "react";
import { connect } from "react-redux";
import { addCampus } from "../../store/utilities/Campus"; // Get the action creator for campuses
import AddCampusView from "../views/AddCampusView";

class AddCampusContainer extends Component {
  // Use local state to keep track of form input
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      address1: "",
      address2: "",
      url: "", // src img url
      description: "",
      enrollments: [], // array of student ids who are currently enrolled in that campus
      errors: {} // array of custom errors key: value pairs to display depending on which field has the error
    };
  }

  handleValidation = event => {
    let formIsValid = true;
    let errors = {}; //local variable

    const {
      name,
      address1,
      address2,
      url,
      description,
      enrollments
    } = this.state;
    console.log(name.trim);
    if (name.trim() == "") {
      formIsValid = false;
      errors["name"] = "Name input cannot be empty.";
    }
    if (address1.trim() == "") {
      formIsValid = false;
      errors["address1"] = "Address line one cannot be empty.";
    }
    if (address2.trim() == "") {
      formIsValid = false;
      errors["address2"] = "Address line two cannot be empty.";
    }

    //Set error messages
    this.setState({ errors: errors });
    return formIsValid;
  };

  handleSubmit = event => {
    event.preventDefault();
    const {
      name,
      address1,
      address2,
      url,
      description,
      enrollments
    } = this.state; // avoid having to write this.state.name, etc. every time in the below code in this function

    if (this.handleValidation()) {
      //if the form is valid
      console.log("handling validation");
      const newCampus = {
        campusName: name,
        address1: address1,
        address2: address2,
        campusImage: url,
        description: description,
        enrollments: enrollments
      };

      // needs validation
      this.props.addCampus(addCampus); // this new object is what's dispatched
    } else {
      //if the form is not valid
      // alert("Your form has errors!");
    }
  };

  handleChange = event => {
    this.setState({
      [event.target.name]: event.target.value // makes all form inputs correspond to local state values
      // name: event.target.value,
      // address1: event.target.value,
      // address2: event.target.value,
      // url: event.target.value,
      // description: event.target.value,
      // enrollments: event.target.value
    });
  };

  render() {
    return (
      <AddCampusView
        handleSubmit={this.handleSubmit}
        handleChange={this.handleChange}
        errors={this.state.errors}
      />
    );
  }
}

// Need list of non-enrolled students....?

const mapDispatch = dispatch => {
  return {
    addCampus: newCampus => dispatch(addCampus(newCampus))
  };
};

export default connect(null, mapDispatch)(AddCampusContainer);
