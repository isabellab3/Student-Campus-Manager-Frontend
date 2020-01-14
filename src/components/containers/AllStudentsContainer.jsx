import React, { Component } from "react";
import { connect } from "react-redux";

import { AllStudentsView } from "../";

class AllStudentsContainer extends Component {
  render() {
    return (
      <div>
        <h1>AllStudentsContainer</h1>
        <AllStudentsView 
          allStudents={this.props.allStudents}
          buttonFunction="remove"      
        />
      </div>
    );
  }
}

function mapStateToProps(state) {
  return { allStudents: state.studentReducer.allStudents };
}

export default connect(mapStateToProps)(AllStudentsContainer);
