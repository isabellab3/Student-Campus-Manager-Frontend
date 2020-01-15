import React, { Component } from "react";

// If you need cards or styling, you can uncomment the lines here to import
// import "../views/SingleStudentView.css";   // needs to be created
// import { CampusCard } from "../";
import { StudentCard } from "../";

const SingleStudentView = (props) => {
  // console.log(props);
  return (
    <div>
      <h2>SingleStudentView</h2>
            <StudentCard
              image={props.image}
              firstName={props.firstName}
              lastName={props.lastName}
              campus={props.campus}
              onClick={props.onClick}
              buttonText={"Remove Student"}
            />
    </div>
    )
}

export default SingleStudentView;
