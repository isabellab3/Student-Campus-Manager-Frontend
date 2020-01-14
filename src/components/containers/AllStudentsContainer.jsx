import React, { Component } from "react";
import { connect } from "react-redux";
import { AllStudentsView } from "../";

class AllStudentsContainer extends Component {
  render() {
    return (
      <div>
        <h1>AllStudentsContainer</h1>
        <AllStudentsView />
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    // key: state.key
  };
}

export default connect(mapStateToProps)(AllStudentsContainer);
