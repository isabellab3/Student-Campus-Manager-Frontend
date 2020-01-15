import React from "react";
import "./AddStudentView.css";

// If you need cards or styling, you can uncomment the lines here to import
// import "../views/AddCampusView.css";
// import { CampusCard } from "../";
// import { StudentCard } from "../";

const AddCampusView = props => {
  return (
    <div className="add-student">
      <h1>New Campus</h1>
      <form className="add-student-form" onSubmit={props.handleSubmit}>
        <div className="form-row">
          <label>Campus Name</label>
          <input
            type='text'
            name='name'
            placeholder='Enter campus name here...'
            onChange={props.handleChange}
          />
        </div>
        <div className="form-row">
          <label>Address Line One</label>
          <input
            type='text'
            name='address1'
            placeholder='Enter address line 1 here...'
            onChange={props.handleChange}
          />
        </div>
        <div className="form-row">
          <label>Address Line Two</label>
          <input
            type='text'
            name='address2'
            placeholder='Enter address line 2 here...'
            onChange={props.handleChange}
          />
        </div>
        <div className="form-row">
          <label>Campus Image URL</label>
          <input
            type='url'
            name='url'
            placeholder='Enter campus image URL...'
            onChange={props.handleChange}
          />
        </div>
        <div className="form-row">
          <label>Description</label>
          <input
            type='text'
            name='description'
            placeholder='Enter campus description here...'
            onChange={props.handleChange}
          />
        </div>
        <div className="form-row">
          {/* Should be a select element... multiple inputs?*/}
          <label>Enrollments</label>
          <select type='text' name='enrollments' onChange={props.handleChange}>
            {/* {Add Options for all Students here} */}
          </select>
        </div>
        <div>
          <input className="submit-button" type='submit' value='+ Add Campus' />
        </div>
      </form>
    </div>
  )
}

export default AddCampusView
