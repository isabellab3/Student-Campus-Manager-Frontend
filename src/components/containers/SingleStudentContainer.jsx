import React, { Component } from "react";
import { connect } from "react-redux";
import { SingleStudentView } from "../";

class SingleStudentContainer extends Component {
  render() {
    console.log(this.props);
    return (
      <div>
        {/* <h1>SingleStudentContainer</h1> */}
        <SingleStudentView
          campus={this.props.campus}
          studentInfo={this.props.studentInfo}
        />
      </div>
    );
  }
}

function mapStateToProps(state, ownProps) {
  console.log(state);
  let studentInfo = state.studentReducer.allStudents[ownProps.match.params.id];
  return {
    studentInfo: studentInfo,
    campus: state.campusReducer.allCampuses[studentInfo.campus]
  };
}

export default connect(mapStateToProps)(SingleStudentContainer);
