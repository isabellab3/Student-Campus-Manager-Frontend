import React, { Component } from "react";

import "./EditStudentView.css";

const EditStudentView = props => {
  return (
    <div className>
      <h1>Edit Student</h1>
      <form className="add-student-form" onSubmit={props.handleSubmit}>
        <div className="form-row">
          <label>Student First Name</label>
          <input
            type="text"
            name="first"
            placeholder="First name here"
            onChange={props.handleChange}
          />
        </div>
        <div>
          <label>Student Last Name</label>
          <input
            type="text"
            name="last"
            placeholder="Last name here"
            onChange={props.handleChange}
          />
        </div>
        <div>
          <label>GPA</label>
          <input
            type="number"
            name="gpa"
            placeholder="4.0"
            step="0.01"
            onChange={props.handleChange}
          />
        </div>
        <div>
          <label>Student Image URL</label>
          <input
            type="url"
            name="url"
            placeholder="Student Image URL"
            onChange={props.handleChange}
          />
        </div>
        <div>
          <label>Student Email</label>
          <input
            type="email"
            name="email"
            placeholder="Student Email"
            onChange={props.handleChange}
          />
        </div>
        <div>
          <label>Campus</label>
          <input
            type="text"
            name="campus"
            placeholder="Campus"
            onChange={props.handleChange}
          />
        </div>
        <div className="form-row">
          <input type="submit" value="+ Add Student" />
        </div>
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
