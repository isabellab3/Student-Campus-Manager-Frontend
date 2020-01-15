import React, { Component } from "react"
import { connect } from "react-redux"
import SingleCampusView from "../views/SingleCampusView"
import allStudents from "../../dummyData/studentsData"
import allCampuses from "../../dummyData/campusesData"

import { getCampus } from "../../store/utilities/Campus"

class SingleCampusContainer extends Component {
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
    // (with redux) fetch the campus info of the campus corresponding to the id from the url
    // const campus = this.props.getCampus(id)

    // for now just gets warwick university
    const campus = allCampuses[0]

    // get list of students who attend this school from the id
    // (with redux) function to query database and get any students who attend this campus
    // const students = this.props.getStudents(campus)
    const filteredStudents = allStudents.filter(student => student.campus === campus.campusName)

    this.setState({ 
      studentsList: filteredStudents, 
      campus: campus 
    })
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

const mapDispatch = dispatch => {
  return {
    getCampus: id => dispatch(getCampus(id))
  }
}

export default connect(null, mapDispatch)(SingleCampusContainer)
