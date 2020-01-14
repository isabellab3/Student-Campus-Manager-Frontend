import React, { Component } from "react"
import { connect } from "react-redux"
import SingleCampusView from "../views/SingleCampusView"
import allStudents from "../../dummyData/studentsData"
import allCampuses from '../../dummyData/campusesData'

class SingleCampus extends Component {
  constructor(props) {
    super(props)
    this.state = {
      studentsList: [],
      campus: {}
    }
  }

  componentDidMount() {
    const id = this.props.match.params.id
    // get campus from id in url
    // for now just gets warwick university
    const campus = allCampuses[0]

    // get list of students who attend this school from the id
    const filteredStudents = allStudents.filter(student => student.campus === campus.campusName)
    console.log(campus, allStudents, filteredStudents)

    this.setState({ studentsList: filteredStudents, campus: campus })
  }

  render() {
    return (
      <SingleCampusView
        studentsList={this.state.studentsList}
        onClick={() => console.log("Remove student from campus")}
        campus={this.state.campus}
      />
    )
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
