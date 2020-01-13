import React, { Component } from "react"
import { connect } from 'react-redux'
import { addStudent } from '../../store/utilities/Student'

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
    const { first, last, gpa, url, email, campus } = this.state
    const newStudent = {
      firstName: first,
      lastName: last,
      gpa: parseFloat(gpa),
      image: url,
      email: email,
      campus: campus
    }

    // needs validation
    this.props.addStudent(newStudent)
  }

  handleChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  render() {
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
            <input
              type='number'
              name='gpa'
              placeholder='4.0'
              step='0.01'
              onChange={this.handleChange}
            />
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

function mapDispatch(dispatch) {
  return {
    addStudent: newStudent => dispatch(addStudent(newStudent))
  }
}

export default connect(null, mapDispatch)(AddStudent)
