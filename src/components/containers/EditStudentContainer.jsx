import React, { Component } from "react";
import { connect } from "react-redux";
import { editStudent } from "../../store/utilities/Student";
import { EditStudentView } from "../";

class EditStudentContainer extends Component {
  constructor(props) {
    super(props);
    // state is used to hold values for the form
    // console.log(this.props.match.params.id);
    // console.log(this.props.studentInfo);
    // we populate the state with values from the store, but also need to populate the values in the form to match
    this.state = {
      firstName: this.props.studentInfo.firstName,
      lastName: this.props.studentInfo.lastName,
      gpa: this.props.studentInfo.gpa,
      image: this.props.studentInfo.image,
      email: this.props.studentInfo.email,
      campus: this.props.studentInfo.campus
    };
    // console.log(this.state.first);
  }

  handleSubmit = event => {
    event.preventDefault();
    const { firstName, lastName, gpa, image, email, campus, id } = this.state;
    const newStudent = {
      firstName: firstName,
      lastName: lastName,
      gpa: parseFloat(gpa),
      image: image,
      email: email,
      campus: campus,
      id: this.props.studentInfo.id
    };

    // needs validation
    this.props.editStudent(newStudent);
  };

  handleChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
  };

  // componentDidMount() {
  //   this.state = {
  //     first: this.props.studentInfo.firstName,
  //     last: this.props.studentInfo.lastName,
  //     gpa: this.props.studentInfo.gpa,
  //     url: this.props.studentInfo.image,
  //     email: this.props.studentInfo.email,
  //     campus: this.props.campusesList[this.props.studentInfo.campus]
  //   };
  // }

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
        {/* <h1>EditStudentContainer</h1> */}
        <EditStudentView
          studentInfo={this.state}
          handleSubmit={this.handleSubmit}
          handleChange={this.handleChange}
          campusesList={this.props.campusesList}
          campusName={this.state.campus}
        />
      </div>
    );
  }
}

const mapState = (state, ownProps) => {
  return {
    campusesList: state.campusReducer.allCampuses,
    studentInfo: state.studentReducer.allStudents[ownProps.match.params.id]
  };
};

const mapDispatch = dispatch => {
  return {
    editStudent: newStudent => dispatch(editStudent(newStudent))
  };
};

export default connect(mapState, mapDispatch)(EditStudentContainer);
