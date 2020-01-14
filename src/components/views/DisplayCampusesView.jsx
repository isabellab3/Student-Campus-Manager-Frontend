import React, { Component } from "react";

import { CampusCard } from "../";

import "../views/DisplayCampusesView.css";

function DisplayCampusesView(props) {
  let campusElements = [];
  for (let i = 0; i < props.allCampuses.length; i++) {
    campusElements.push(
      <div class="campus-grid-item">
        <CampusCard
          campus={props.allCampuses[i]}
          buttonFunction={props.buttonFunction}
        />
      </div>
    );
  }

  return (
    <div>
      <h2>DisplayCampusesView</h2>
      <div class="campus-grid-container">{campusElements}</div>
    </div>
  );
}

export default DisplayCampusesView;
