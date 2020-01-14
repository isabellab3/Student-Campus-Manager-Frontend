import React, { Component } from "react";
// import StudentCard from "./StudentCard";

// If you need cards or styling, you can uncomment the lines here to import
import "../views/AllStudentsView.css";
// import { CampusCard } from "../";
import { StudentCard } from "..";

function AllStudentsView(props) {
    let studentElements = [];
    for (let i = 0; i < props.allStudents.length; i++) {
      
      studentElements.push(
        <div className="student-grid-item">
          <StudentCard
            student={props.allStudents[i]}
            buttonFunction={props.buttonFunction}
            buttonText={props.buttonText}
          />
        </div>
      );
    }
  
    return (
      <div>
        <div className="student-grid-container">{studentElements}</div>
      </div>
    );
  }

export default AllStudentsView;
