import React, { Component } from "react";

import { CampusCard } from "..";

import "../views/AllCampusesView.css";

function AllCampusesView(props) {
  let campusElements = [];
  console.log(props);
  for (let i = 0; i < props.allCampuses.length; i++) {
    campusElements.push(
      <div className="campus-grid-item">
        <CampusCard
          campus={props.allCampuses[i]}
          buttonFunction={props.buttonFunction}
        />
      </div>
    );
  }

  return (
    <div>
      <h2>AllCampusesView</h2>
      <div className="campus-grid-container">{campusElements}</div>
    </div>
  );
}

export default AllCampusesView;
