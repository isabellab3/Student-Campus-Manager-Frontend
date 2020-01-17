import React, { Component } from "react";

import "../views/SingleStudentView.css";
import { CampusCard } from "..";

const SingleStudentView = props => {
  return (
    <div className="single-student-page">
      <div className="single-student-top">
        <img
          className="single-student-image"
          src={props.studentInfo.image}
          alt=""
        />

        <div className="single-student-info">
          <h2 className="single-student-name">
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

      {props.campus == null ? (
        <div className="single-student-bottom-unenrolled">
          <div className="unenrolled">
            <div className="top">
              This student is not registered to a campus.
            </div>
            <div className="bottom">
              <div className="select-container">
                <div className="select-wrapper">
                  <select className="classic">
                    <option>None</option>
                    <option>Campus 1</option>
                    <option>Campus 2</option>
                  </select>
                  <div className="enroll-button">Change Campus</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div className="single-student-bottom-enrolled">
          <div className="enrolled">
            <div className="top">
              <div>This student is registered to a campus.</div>
            </div>

            <div className="bottom">
              <CampusCard campus={props.campus} buttonFunction="unenroll" />
              <div className="select-container">
                <div className="select-wrapper">
                  <select className="classic" id="single-student-view">
                    <option>None</option>
                    <option>Campus 1</option>
                    <option>Campus 2</option>
                  </select>
                  <div className="enroll-button">Change Campus</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default SingleStudentView;
