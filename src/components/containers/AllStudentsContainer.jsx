import React, { Component } from "react";
import { connect } from "react-redux";

import { AllStudentsView } from "../";

class AllStudentsContainer extends Component {
  render() {
    return (
      <div>
        
        <AllStudentsView 
          allStudents={this.props.allStudents}
          allCampuses={this.props.allCampuses}
          buttonFunction="remove"
          buttonText="remove"      
        />
      </div>
    );
  }
}

function mapStateToProps(state) {
  return { 
    allStudents: state.studentReducer.allStudents,
    allCampuses: state.campusReducer.allCampuses
  };
}

export default connect(mapStateToProps)(AllStudentsContainer);
