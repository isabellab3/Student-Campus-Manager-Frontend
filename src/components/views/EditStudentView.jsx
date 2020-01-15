import React, { Component } from "react";

import "./EditStudentView.css";

const EditStudentView = props => {
  console.log(props);
  return (
    <div className="add-student">
      <h1>Edit Student</h1>
      <form className="add-student-form" onSubmit={props.handleSubmit}>
        <div className="form-row">
          <label>Student First Name</label>
          <input
            type="text"
            name="firstName"
            placeholder="Enter first name here..."
            onChange={props.handleChange}
            value={props.studentInfo.firstName}
          />
        </div>
        <div className="form-row">
          <label>Student Last Name</label>
          <input
            type="text"
            name="lastName"
            placeholder="Enter last name here..."
            onChange={props.handleChange}
            value={props.studentInfo.lastName}
          />
        </div>
        <div className="form-row">
          <label>GPA</label>
          <input
            type="number"
            name="gpa"
            placeholder="4.0"
            step="0.01"
            onChange={props.handleChange}
            value={props.studentInfo.gpa}
          />
        </div>
        <div className="form-row">
          <label>Student Image URL</label>
          <input
            type="url"
            name="image"
            placeholder="Enter student image URL..."
            onChange={props.handleChange}
            value={props.studentInfo.image}
          />
        </div>
        <div className="form-row">
          <label>Student Email</label>
          <input
            type="email"
            name="email"
            placeholder="Enter student email..."
            onChange={props.handleChange}
            value={props.studentInfo.email}
          />
        </div>
        <div className="form-row">
          <label>Campus</label>
          <select
            type="text"
            name="campus"
            placeholder="Campus"
            onChange={props.handleChange}
            value={props.campusName}
          >
            {props.campusesList.map(campus => {
              return (
                <option value="campus.campusName">{campus.campusName}</option>
              );
            })}
          </select>
        </div>
        <input
          className="submit-button"
          type="submit"
          value="+ Update Student"
        />
      </form>
    </div>
  );
};

export default EditStudentView;
