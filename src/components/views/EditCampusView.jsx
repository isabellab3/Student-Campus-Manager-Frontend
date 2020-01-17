import React, { Component } from "react";
import "../views/EditCampusView.css";
// import { CampusCard } from "../";
// import { StudentCard } from "../";

const EditCampusView = (props) => {
  console.log(props.studentsList);
  return (
    <div className="add-student">
      <h1>Edit Campus</h1>
      <form className="add-student-form" onSubmit={props.handleSubmit}>
        <div className="form-row">
          <label>Campus Name</label>
          <input
            type='text'
            name='name'
            placeholder='Enter campus name here...'
            onChange={props.handleChange}
            className={props.campusInfo.nameStatus}
            value={props.campusInfo.name}
            required
          />
        </div>
        <div className="form-row">
          <label>Address Line One</label>
          <input
            type='text'
            name='address1'
            placeholder='Enter address line 1 here...'
            onChange={props.handleChange}
            className={props.campusInfo.address1Status}
            value={props.campusInfo.address1}
            required
          />
        </div>
        <div className="form-row">
          <label>Address Line Two</label>
          <input
            type='text'
            name='address2'
            placeholder='Enter address line 2 here...'
            onChange={props.handleChange}
            value={props.campusInfo.address2}
            className={props.campusInfoaddress2Status}
            required
          />
        </div>
        <div className="form-row">
          <label>Campus Image URL</label>
          <input
            type='url'
            name='url'
            placeholder='Enter campus image URL...'
            value={props.campusInfo.url}
            onChange={props.handleChange}
          />
        </div>
        <div className="form-row">
          <label>Description</label>
          <input
            type='text'
            name='description'
            placeholder='Enter campus description here...'
            value={props.campusInfo.description}
            onChange={props.handleChange}
          />
        </div>
        <div className="form-row">
          <label>Enroll New Student</label>
          <select 
            type='text' 
            name='enrollments' 
            onChange={props.handleChange}

          >
            {/* Needs to be replaced with none-enrolled students */}
            {Object.entries(props.campusInfo.enrollments).map(([k, v]) => {
              return <option>{props.studentsList[v].firstName} {props.studentsList[v].lastName}</option>
            })}
            <option>None</option>
          </select>
        </div>
        {/* Error message is mapped on from local state error object list */}
        {/* Each object needs a unique key set to its key part in the local state */}
        {Object.entries(props.campusInfo.errors).map(([k, v]) => {
          return <div className="errors" key={k}><i>{v}</i></div>
        })}
        <div>
          <input className="submit-button" type='submit' value='Edit Campus' />
        </div>
      </form>
    </div>
  )
}



export default EditCampusView;
