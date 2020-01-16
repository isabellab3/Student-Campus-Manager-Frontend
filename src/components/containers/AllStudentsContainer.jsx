import React, { Component } from "react";
import { connect } from "react-redux";

import { AllStudentsView } from "../";

class AllStudentsContainer extends Component {
  render() {
    return (
      <div>
        <AllStudentsView 
          allStudents={this.props.allStudents}
          buttonFunction="remove"
          buttonText="X"      
        />
      </div>
    );
  }
} 

function mapStateToProps(state) {
  return { allStudents: state.studentReducer.allStudents };
}

export default connect(mapStateToProps)(AllStudentsContainer);
