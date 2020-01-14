import React, { Component } from "react";
import { connect } from "react-redux";
import { SingleStudentView } from "../";

class SingleStudentContainer extends Component {
  render() {
    return (
      <div>
        <h1>SingleStudentContainer</h1>
        <SingleStudentView />
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    // key: state.key
  };
}

export default connect(mapStateToProps)(SingleStudentContainer);
