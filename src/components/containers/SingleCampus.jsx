import React, { Component } from "react"
import { connect } from "react-redux"
import SingleCampusView from "../views/SingleCampusView"

import allStudents from "../../dummyData/studentsData"


/* 

{id: 2, firstName: "First", lastName: "Last", gpa: 3.5, image: "https://files.slack.com/files-pri/TS58GH27P-FS7AXK1FC/user01.jpg", …}
id: 2
firstName: "First"
lastName: "Last"
gpa: 3.5
image: "https://files.slack.com/files-pri/TS58GH27P-FS7AXK1FC/user01.jpg"
email: "First.Last.22@myhunter.cuny.edu"
campus: "Hunter College"
*/

class SingleCampus extends Component {
  constructor(props) {
    super(props)
    this.state = {
      student: {
        firstName: "",
        lastName: "",
        gpa: 0.0,
        image: "",
        campus: "",
        email: ""
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
