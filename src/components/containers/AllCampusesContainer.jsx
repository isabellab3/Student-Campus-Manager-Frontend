import React, { Component } from "react";
import { connect } from "react-redux";

import { AllCampusesView } from "..";

class AllCampusesContainer extends Component {
  render() {
    console.log(this.props.allCampuses);

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
  console.log(state);
  return { allCampuses: state.campusesReducer.allCampuses };
}

export default connect(mapStateToProps)(AllCampusesContainer);
