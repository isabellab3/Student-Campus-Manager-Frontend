import React from "react";

// If you need cards or styling, you can uncomment the lines here to import
// import "../views/AddCampusView.css";
// import { CampusCard } from "../";
// import { StudentCard } from "../";

const AddCampusView = props => {
  return (
    <div>
      <h1>New Campus</h1>
      <form onSubmit={props.handleSubmit}>
        <div>
          <label>Campus Name</label>
          <input
            type='text'
            name='name'
            placeholder='Campus name here'
            onChange={props.handleChange}
          />
        </div>
        <div>
          <label>Address Line 1</label>
          <input
            type='text'
            name='address1'
            placeholder='Address line 1 here'
            onChange={props.handleChange}
          />
        </div>
        <div>
          <label>Address Line 2</label>
          <input
            type='text'
            name='address2'
            placeholder='Address line 2 here'
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
          <label>Description</label>
          <input
            type='text'
            name='description'
            placeholder='Campus Description'
            onChange={props.handleChange}
          />
        </div>
        <div>
          {/* Should be a select element... multiple inputs?*/}
          <label>Enrollments</label>
          <select type='text' name='enrollments' onChange={props.handleChange}>
            {/* {Add Options for all Students here} */}
          </select>
        </div>
        <div>
          <input type='submit' value='+ Add Campus' />
        </div>
      </form>
    </div>
  )
}

export default AddCampusView;
