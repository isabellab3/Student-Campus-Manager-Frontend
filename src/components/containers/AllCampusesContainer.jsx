import React, { Component } from "react";
import { connect } from "react-redux";

import { AllCampusesView } from "..";

class AllCampusesContainer extends Component {
  render() {
    return (
      <div>
        <h1>AllCampusesContainer</h1>
        <AllCampusesView
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

export default connect(mapStateToProps)(AllCampusesContainer);
