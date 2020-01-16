import React, { Component } from "react";
import { connect } from "react-redux";
import { editCampus } from "../../store/utilities/Campus";
import { EditCampusView } from "../";

class EditCampusContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: this.props.campusInfo.campusName,
      address1: this.props.campusInfo.address1,
      address2: this.props.campusInfo.address2,
      url: this.props.campusInfo.campusImage, // src img url
      description: this.props.campusInfo.description,
      enrollments: this.props.campusInfo.enrollments,
      errors: [],
      nameStatus: "",
      address1Status: "",
      address2Status: ""
    }
  }

  handleValidation = event => {
    let formIsValid = true;
    let errors = {}; //local variable
    let nameTemp = "";
    let address1Temp = "";
    let address2Temp = "";

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
      nameTemp = "error-border";
    }
    if (address1.trim() == "") {
      formIsValid = false;
      errors["address1"] = "Address line one cannot be empty.";
      address1Temp = "error-border";
    }
    if (address2.trim() == "") {
      formIsValid = false;
      errors["address2"] = "Address line two cannot be empty.";
      address2Temp = "error-border";
    }

    //Set error messages
    this.setState({
      errors: errors,
      nameStatus: nameTemp,
      address1Status: address1Temp,
      address2Status: address2Temp
    });
    return(formIsValid);
  }


  handleSubmit = event => {
    event.preventDefault();
    const { name, address1, address2, url, description, enrollments, id} = this.state;
    if(this.handleValidation()) {
      const newCampus = {
        name: name,
        address1: address1,
        address2: address2,
        url: url,
        description: description,
        enrollments: enrollments,
        id: this.props.campusInfo.id
      };
  
      // needs validation
      this.props.editCampus(newCampus);
    }
    else {
      
    }
  }

  handleChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
  };

  render() {
    return (     
      <EditCampusView 
          campusInfo={this.state}
          handleChange={this.handleChange}
          handleSubmit={this.handleSubmit}
          studentsList={this.props.studentsList}/>
    );
  }
}

// ownProps is passed in by the Router and is the campus id
const mapStateToProps = (state, ownProps) => {
  return {
    studentsList: state.studentReducer.allStudents,
    campusInfo: state.campusReducer.allCampuses[ownProps.match.params.id]
  };
}

const mapDispatch = dispatch => {
  return {
    editCampus: newCampus => dispatch(editCampus(newCampus))
  };
}

export default connect(mapStateToProps, mapDispatch)(EditCampusContainer);
