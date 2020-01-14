import React, { Component } from "react";
import { connect } from "react-redux";
import { addCampus } from "../../store/utilities/Campuses"; // Get the action creator for campuses
import { AddCampusView } from "../";

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
      enrollments: [] // array of student ids who are currently enrolled in that campus
    };
  }

  handleSubmit = event => {
    event.preventDefault()
    const { name, address1, address2, url, description, enrollments } = this.state // avoid having to write this.state.name, etc. every time in the below code in this function
    const newCampus = {
      campusName: name,
      address1: address1,
      address2: address2,
      campusImage: url,
      description: description,
      enrollments: enrollments
    }

    // needs validation
    this.props.addCampus(addCampus) // this new object is what's dispatched
  }

  handleChange = event => {
    this.setState({
      [event.target.name]: event.target.value // makes all form inputs correspond to local state values
    })
  }

  render() {
    return (
        <AddCampusView handleSubmit={this.handleSubmit} handleChange={this.handleChange} />
    );
  }
}

const mapDispatch = dispatch => {
  return {  
    addCampus: newCampus => dispatch(addCampus(newCampus))
  };
}

export default connect(null, mapDispatch)(AddCampusContainer);
