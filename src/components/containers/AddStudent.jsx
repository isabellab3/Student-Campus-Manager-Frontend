import React, { Component } from "react"

class AddStudent extends Component {
  constructor(props) {
    super(props)
    this.state = {
      first: "",
      last: "",
      gpa: 0.0,
      url: "",
      email: "",
      campus: ""
    }
  }

  handleSubmit = event => {
    event.preventDefault()
    // redux: add new student to database
  }

  handleChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  render() {
    console.log(this.state)
    return (
      <div>
        <h1>New Student</h1>
        <form onSubmit={this.handleSubmit}>
          <div className='form-row'>
            <label>Student First Name</label>
            <input
              type='text'
              name='first'
              placeholder='First name here'
              onChange={this.handleChange}
            />
          </div>
          <div className='form-row'>
            <label>Student Last Name</label>
            <input
              type='text'
              name='last'
              placeholder='Last name here'
              onChange={this.handleChange}
            />
          </div>
          <div className='form-row'>
            <label>GPA</label>
            <input type='number' name='gpa' placeholder='4.0' onChange={this.handleChange} />
          </div>
          <div className='form-row'>
            <label>Student Image URL</label>
            <input
              type='url'
              name='url'
              placeholder='Student Image URL'
              onChange={this.handleChange}
            />
          </div>
          <div className='form-row'>
            <label>Student Email</label>
            <input
              type='email'
              name='email'
              placeholder='Student Email'
              onChange={this.handleChange}
            />
          </div>
          <div className='form-row'>
            <label>Campus</label>
            <input type='text' name='campus' placeholder='Campus' onChange={this.handleChange} />
          </div>
          <input type='submit' value='+ Add Student' />
        </form>
      </div>
    )
  }
}

export default AddStudent
