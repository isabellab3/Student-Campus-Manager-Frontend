import React, { Component } from "react";
import { connect } from "react-redux";
import { AddCampusView } from "../";

class AddCampusContainer extends Component {
  render() {
    return (
      <div>
        <h1>AddCampusContainer</h1>
        <AddCampusView />
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    // key: state.key
  };
}

export default connect(mapStateToProps)(AddCampusContainer);
