import React, { Component } from "react";
import { CampusCard } from "..";
import "../views/AllCampusesView.css";

function AllCampusesView(props) {
  let campusElements = [];
  // console.log(props);
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
      <div className="top-text">
        <h1 className="title">All Campuses</h1>
        <div className="add-campus-button">+ Add Campus</div>
      </div>
      <div className="campus-grid-container">{campusElements}</div>
    </div>
  );
}

export default AllCampusesView;
