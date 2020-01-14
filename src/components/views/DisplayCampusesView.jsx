import React, { Component } from "react";

import { CampusCard } from "../";

function DisplayCampusesView(props) {
  // create an array of campus elements / CampusCards
  let campusElements = [];
  let campusElementsRow = [];
  for (let i = 0; i < props.allCampuses.length; i++) {
    campusElementsRow.push(
      <td>
        <CampusCard
          campus={props.allCampuses[i]}
          buttonFunction={props.buttonFunction}
        />
      </td>
    );
    if (i % 3 == 2) {
      campusElementsRow = [<tr>{campusElementsRow}</tr>];
      campusElements.push(campusElementsRow);
      campusElementsRow = [];
    }
  }
  if (props.allCampuses.length % 3 !== 2) {
    campusElementsRow = [<tr>{campusElementsRow}</tr>];
    campusElements.push(campusElementsRow);
    campusElementsRow = [];
  }

  console.log(campusElements);

  // for (let i = 0; i < props.allCampuses.length; i++) {
  //   campusElements.push(

  //   );
  // }

  return (
    <div>
      <h2>DisplayCampusesView</h2>
      {campusElements}
      {/* <img src="/images/campuses/campus01.jpg" alt="campus image" width="500" /> */}
    </div>
  );
}

export default DisplayCampusesView;
