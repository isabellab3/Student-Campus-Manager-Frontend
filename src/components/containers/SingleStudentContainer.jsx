import React, { Component } from "react";
import { connect } from "react-redux";
import { SingleStudentView } from "../";

import displayStudent from "../../store/utilities/Student"

class SingleStudentContainer extends Component {
  render() {
    // console.log(this.props.firstName)
    return (
      <div>
        <h1>SingleStudentContainer</h1>
        <SingleStudentView 
          firstName={this.props.firstName}
          lastName={this.props.lastName}
          image={this.props.image}
          campus={this.props.campus}
        />
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    // key: state.key
    firstName: state.studentReducer.firstName,
    lastName: state.studentReducer.lastName,
    image: state.studentReducer.image,
    campus: state.studentReducer.campus
  };
}

const mapDispatch = dispatch => {
  return {
    displayStudent: student => dispatch(displayStudent(student))
  }
}



export default connect(mapStateToProps, mapDispatch)(SingleStudentContainer);
