import React, { Component } from "react"
import { connect } from "react-redux"
import SingleCampusView from "../views/SingleCampusView"

import allStudents from "../../dummyData/studentsData"

class SingleCampus extends Component {
  constructor(props) {
    super(props)
    this.state = {
      student: {
        firstName: "",
        lastName: "",
        image: "",
        url: "",
        gpa: 0.0,
        campus: ""
      }
    }
  }

  componentDidMount() {
    const id = this.props.match.params.id

    // get the current student id from url params
    const student = allStudents[1]
    this.setState({ student: student })
  }

  render() {
    return <SingleCampusView student={this.state.student} />
  }
}

export default SingleCampus

/* 
function mapDispatch(dispatch) {
  return (
    <SingleCampusView />
  )
}

export default connect(null, mapDispatch)(SingleCampus) */
