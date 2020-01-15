import React, { Component } from "react";
import { connect } from "react-redux";
import { editStudent } from "../../store/utilities/Students";
import { EditStudentView } from "../";

class EditStudentContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      first: "",
      last: "",
      gpa: 0.0,
      url: "",
      email: "",
      campus: ""
    };
  }

  handleSubmit = event => {
    event.preventDefault();
    const { first, last, gpa, url, email, campus } = this.state;
    const newStudent = {
      firstName: first,
      lastName: last,
      gpa: parseFloat(gpa),
      image: url,
      email: email,
      campus: campus
    };

    // needs validation
    this.props.editStudent(newStudent);
  };

  handleChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
  };

  // render() {
  //   return (
  //     <AddStudentView
  //       campusesList={this.props.campusesList}
  //     />
  //   );
  // }

  render() {
    return (
      <div>
        <h1>EditStudentContainer</h1>
        <EditStudentView
          id={1}
          handleSubmit={this.handleSubmit}
          handleChange={this.handleChange}
        />
      </div>
    );
  }
}

const mapState = state => {
  return {
    campusesList: state.campusesReducer.allCampuses,
    allStudents: state.studentReducer.allStudents
  };
};

const mapDispatch = dispatch => {
  return {
    editStudent: newStudent => dispatch(editStudent(newStudent))
  };
};

export default connect(mapState, mapDispatch)(EditStudentContainer);
