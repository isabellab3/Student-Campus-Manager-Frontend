import React, { Component } from "react";
import { connect } from "react-redux";

import { DisplayCampusesView } from "../";

class DisplayCampusesContainer extends Component {
  render() {
    return (
      <div>
        <h1>DisplayCampusesContainer</h1>
        <DisplayCampusesView
          allCampuses={this.props.allCampuses}
          buttonFunction="remove"
        />
      </div>
    );
  }
}

function mapStateToProps(state) {
  return { allCampuses: state.allCampuses };
}

export default connect(mapStateToProps)(DisplayCampusesContainer);
