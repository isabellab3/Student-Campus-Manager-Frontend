import React, { Component } from "react";

// If you need cards or styling, you can uncomment the lines here to import
// import "../views/EditCampusView.css";
// import { CampusCard } from "../";
// import { StudentCard } from "../";

const EditCampusView = (props) => {
  return (
    <div className>
      <h1>Edit Campus</h1>
      <form onSubmit={props.handleSubmit}>
        <div className='form-row'>
          <label>Campus Name</label>
          <input
            type='text'
            placeholder='cool campus name'
            onChange={props.handleChange}
          />
        </div>
        <div>
          <label>Campus Location</label>
          <input
            type='text'
            placeholder='Address'
            onChange={props.handleChange}
          />
        </div>
        <div>
          <label>Campus Image URL</label>
          <input
            type='url'
            name='url'
            placeholder='Campus Image URL'
            onChange={props.handleChange}
          />
        </div>
        <div>
          <label>Campus Description</label>
          <input
            type='text'
            placeholder='Campus description'
            onChange={props.handleChange}
          />
        </div>
        <div className='form-row'>

        <input type='submit' value='Save Changes' />
        </div>
      </form>
    </div>
  )
}



export default EditCampusView;
