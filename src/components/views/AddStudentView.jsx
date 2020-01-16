import React from "react";
import "./AddStudentView.css";

const AddStudentView = props => {
  return (
    <div className="add-student">
      <h1>New Student</h1>
      <form className="add-student-form" onSubmit={props.handleSubmit}>
        <div className="form-row">
          <label>Student First Name</label>
          <input
            type="text"
            name="first"
            placeholder="Enter first name here..."
            onChange={props.handleChange}
            className={props.firstStatus}
            required
          />
        </div>
        <div className="form-row">
          <label>Student Last Name</label>
          <input
            type="text"
            name="last"
            placeholder="Enter last name here..."
            onChange={props.handleChange}
            className={props.lastStatus}
            required
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
            className={props.gpaStatus}
            required
            // min="0"
            // max="4.0"
          />
        </div>
        <div className="form-row">
          <label>Student Image URL</label>
          <input
            type="url"
            name="url"
            placeholder="Enter student image URL..."
            onChange={props.handleChange}
            // Needs default value/image
          />
        </div>
        <div className="form-row">
          <label>Student Email</label>
          <input
            type="email"
            name="email"
            placeholder="Enter student email..."
            onChange={props.handleChange}
            required
          />
        </div>
        <div className="form-row">
          <label>Campus</label>
          <select type='text' name='campus' placeholder='Campus' onChange={props.handleChange}>
            <option value='none'>None</option>
            {props.campusesList.map(campus => {
              return (
                <option value="campus.campusName">{campus.campusName}</option>
              );
            })}
          </select>
        </div>

        {/* Display errors at the bottom of the form above the submit button */}
        {Object.entries(props.errors).map(([k, v]) => {
          return <div className="errors" key={k}><i>{v}</i></div>
        })}

        <input className='submit-button' type='submit' value='+ Add Student' />
      </form>
    </div>
  );
};

export default AddStudentView;
