import React from "react";
import StudentCard from "./StudentCard";
import "./SingleCampusView.css";

const SingleCampusView = props => {
  console.log(props.campus);
  return (
    <div>
      <img
        src={props.campus.campusImage}
        alt="campus image"
        height="400px"
        id="campus"
      />
      <div className="campus-right">
        <h1 id="campus-name">{props.campus.campusName}</h1>
        <div className="campus-description">
          {" "}
          <p>{props.campus.description}</p>{" "}
        </div>
      </div>
      <div className="address-bar">
        <p className="address">{props.campus.address1}</p>
        <p className="address">{props.campus.address2}</p>
      </div>
      <div className="students">
        <h1 className="title">Students on campus</h1>
        {props.studentsList.length > 0 ? (
          // If there are sudents enrolled to this campus...
          props.studentsList.map(student => {
            return (
              <StudentCard
                image={student.image}
                firstName={student.firstName}
                lastName={student.lastName}
                campus={student.campus}
                onClick={props.onClick}
                buttonText={"Remove Student"}
              />
            );
          })
        ) : (
          // Else if no students enrolled to this campus...
          ( <div className="choose-students">
              
              <div className="no-students">
                There are no students currently registered to this campus.
              </div>
              <div className="select-container">
                <div className="select-wrapper">
                  <select className="classic" id="single-campus-view">
                    
                    <option>None</option>
                    <option>Student Temp 1</option>
                    <option>Student Temp 2</option>
                  </select>
                  <div className="enroll-button">
                    Enroll Student
                  </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default SingleCampusView;
