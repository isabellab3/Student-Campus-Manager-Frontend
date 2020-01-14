import React from "react"
import './AddStudent.css'
const AddStudentView = props => {
  return (
    <div className>
      <h1>New Student</h1>
      <form onSubmit={props.handleSubmit}>
        <div>
          <label>Student First Name</label>
          <input
            type='text'
            name='first'
            placeholder='First name here'
            onChange={props.handleChange}
          />
        </div>
        <div>
          <label>Student Last Name</label>
          <input
            type='text'
            name='last'
            placeholder='Last name here'
            onChange={props.handleChange}
          />
        </div>
        <div>
          <label>GPA</label>
          <input
            type='number'
            name='gpa'
            placeholder='4.0'
            step='0.01'
            onChange={props.handleChange}
          />
        </div>
        <div>
          <label>Student Image URL</label>
          <input
            type='url'
            name='url'
            placeholder='Student Image URL'
            onChange={props.handleChange}
          />
        </div>
        <div>
          <label>Student Email</label>
          <input
            type='email'
            name='email'
            placeholder='Student Email'
            onChange={props.handleChange}
          />
        </div>
        <div>
          <label>Campus</label>
          <input type='text' name='campus' placeholder='Campus' onChange={props.handleChange} />
        </div>
        <div>
          <input type='submit' value='+ Add Student' />
        </div>
      </form>
    </div>
  )
}

export default AddStudentView
