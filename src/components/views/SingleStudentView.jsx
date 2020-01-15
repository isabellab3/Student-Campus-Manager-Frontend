import React, { Component } from "react";

// If you need cards or styling, you can uncomment the lines here to import
// import "../views/SingleStudentView.css";   // needs to be created
// import { CampusCard } from "../";
import { StudentCard } from "../";

const SingleStudentView = (props) => {
  return (
    <div>
      <h2>SingleStudentView</h2>
            <StudentCard
              image={props.student.image}
              firstName={props.student.firstName}
              lastName={props.student.lastName}
              campus={props.student.campus}
              onClick={props.onClick}
              buttonText={"Remove Student"}
            />
    </div>
    )
}

export default SingleStudentView;
