import React, { Component } from "react";

import "./EditStudentView.css";

const EditStudentView = props => {
  return (
    <div className="add-student">
      <h1>Edit Student</h1>
      <form className="add-student-form" onSubmit={props.handleSubmit}>
        <div className="form-row">
          <label>Student First Name</label>
          <input
            type="text"
            name="first"
            placeholder="Enter first name here..."
            onChange={props.handleChange}
          />
        </div>
        <div className="form-row">
          <label>Student Last Name</label>
          <input
            type="text"
            name="last"
            placeholder="Enter last name here..."
            onChange={props.handleChange}
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
          />
        </div>
        <div className="form-row">
          <label>Student Image URL</label>
          <input
            type="url"
            name="url"
            placeholder="Enter student image URL..."
            onChange={props.handleChange}
          />
        </div>
        <div className="form-row">
          <label>Student Email</label>
          <input
            type="email"
            name="email"
            placeholder="Enter student email..."
            onChange={props.handleChange}
          />
        </div>
        <div className="form-row">
          <label>Campus</label>
          <select
            type="text"
            name="campus"
            placeholder="Campus"
            onChange={props.handleChange}
          >
            {/*             {props.campusesList.map(campus => {
                return <option value='campus.campusName'>{campus.campusName}</option>
              })} */}
          </select>
        </div>
        <input className="submit-button" type="submit" value="+ Add Student" />
      </form>
    </div>
  );
};

export default EditStudentView;

// // If you need cards or styling, you can uncomment the lines here to import
// // import "../views/EditStudentView.css";
// // import { CampusCard } from "../";
// // import { StudentCard } from "../";

// function EditStudentView() {
//   return (
//     <div>
//       <h2>EditStudentView</h2>
//     </div>
//   );
// }

// export default EditStudentView;
