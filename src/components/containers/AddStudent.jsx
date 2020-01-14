import React, { Component } from "react"
import { connect } from "react-redux"
import { addStudent } from "../../store/utilities/Student"
import AddStudentView from "../views/AddStudentView"

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
    console.log(this.state)
    return (
      <AddStudentView handleSubmit={this.handleSubmit} handleChange={this.handleChange} />
    )
  }
}

const mapDispatch = dispatch => {
  return {
    addStudent: newStudent => dispatch(addStudent(newStudent))
  }
}

export default connect(null, mapDispatch)(AddStudent)
