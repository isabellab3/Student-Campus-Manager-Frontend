import React, { Component } from "react"
import { connect } from "react-redux"
import { SingleStudentView } from "../"
import { getStudentThunk } from "../../store/utilities/Student"

class SingleStudentContainer extends Component {
  constructor(props) {
    super(props)
    this.state = {
      student: {}
    }
  }
  componentDidMount() {
    // get the student object based on the id from the url
    // console.log();

    const student = getStudentThunk(this.props.match.params.id)
    console.log("Student: ", student)
    this.setState({ student: student })
  }
  render() {
    console.log(this.state.student)
    return (
      <div>
        <h1>SingleStudentContainer</h1>
        <SingleStudentView />
      </div>
    )
  }
}

/* function mapStateToProps(state) {
  return {
    // key: state.key
  };
} */

const mapDispatch = dispatch => {
  return {
    getStudentThunk: id => dispatch(getStudentThunk(id))
  }
}

export default connect(null, mapDispatch)(SingleStudentContainer)
