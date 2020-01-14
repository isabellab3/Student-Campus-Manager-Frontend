import React from "react"
import StudentCard from "./StudentCard"

const AddStudentView = props => {
  return (
    <div className='add-student'>
      <h1>Campus Name</h1>
      <StudentCard
        image={props.student.image}
        firstName={props.student.firstName}
        lastName={props.student.lastName}
        campus={props.student.campus}
        onClick={() => {
          console.log("function is running")
        }}
        buttonText={'Add Student'}
      />
    </div>
  )
}

export default AddStudentView
