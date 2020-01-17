import React, { Component } from "react";
import "../views/AllStudentsView.css";
import { StudentCard } from "..";

function AllStudentsView(props) {
    let studentElements = [];
    let campusNameToBePassed = "";

    // The campuses are passed down as props from the Store so you can access it using the student's campus id
    for (let i = 0; i < props.allStudents.length; i++) {
      if(props.allStudents[i].campus != null && props.allStudents[i].campus != undefined) {
        console.log("campus name", props.allCampuses[props.allStudents[i].campus].campusName);
        campusNameToBePassed = props.allCampuses[props.allStudents[i].campus].campusName;
      } else {
        campusNameToBePassed = "Not enrolled";
      }
      
      studentElements.push(
        <div className="student-grid-item">
          <StudentCard
            student={props.allStudents[i]}
            buttonFunction={props.buttonFunction}
            buttonText={props.buttonText}
            campusName={campusNameToBePassed}
          />
        </div>
      );
    }
  
    return (
      <div>
        <div className="top-text">
          <h1 className="title-all-students">All Students</h1>
          <a href={"/addstudent/"}><div className="add-student-button" id="add-student-button">+ Add Student</div></a>
        </div>
        <div className="student-grid-container">{studentElements}</div>
      </div>
    );
  }

export default AllStudentsView;