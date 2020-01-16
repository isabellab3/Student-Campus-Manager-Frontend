import React, { Component } from "react";

import "../views/SingleStudentView.css";
import { CampusCard } from "..";

const SingleStudentView = props => {
  return (
    <div>
      <div className="top">
        <img src={props.studentInfo.image} alt="" />

        <div className="single-student-info">
          <h2>
            {props.studentInfo.firstName + " " + props.studentInfo.lastName}
          </h2>
          <p>
            <b>GPA: </b>
            {props.studentInfo.gpa + " "}/ 4.0
          </p>
          <p>
            <b>Email: </b>
            <a href="mailto:{props.studentInfo.email}">
              {props.studentInfo.email}
            </a>
          </p>
          <div className="single-student-buttons">
            <div className="edit">edit</div>
            <div className="delete">delete</div>
          </div>
        </div>
      </div>

      <div className="single-student-campus">
        {props.campus == null ? (
          <div>This student is not registered to a campus.</div>
        ) : (
          <div>
            <div>This student is registered to a campus.</div>
            <CampusCard campus={props.campus} buttonFunction="unenroll" />
          </div>
        )}
      </div>
    </div>
  );
};

export default SingleStudentView;
