import React, { Component } from "react";
import { connect } from "react-redux";
import { EditCampusView } from "../";

class EditCampusContainer extends Component {
  render() {
    return (
      <div>
        <h1>EditCampusContainer</h1>
        <EditCampusView />
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    // key: state.key
  };
}

export default connect(mapStateToProps)(EditCampusContainer);
