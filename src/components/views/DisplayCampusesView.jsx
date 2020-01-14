import React, { Component } from "react";

import { CampusCard } from "../";

function DisplayCampusesView(props) {
  // create an array of campus elements / CampusCards
  let campusElements = [];
  console.log(props);
  for (let i = 0; i < props.allCampuses.length; i++) {
    campusElements.push(<CampusCard campus={props.allCampuses[i]} />);
  }

  return (
    <div>
      <h2>DisplayCampusesView</h2>
      {campusElements}
      {/* <img src="/images/campuses/campus01.jpg" alt="campus image" width="500" /> */}
    </div>
  );
}

export default DisplayCampusesView;
