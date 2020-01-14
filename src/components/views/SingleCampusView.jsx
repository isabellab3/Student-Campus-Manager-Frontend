import React from "react"
import StudentCard from "./StudentCard"

const SingleCampusView = props => {
  console.log(props.campus)
  return (
    <div className='add-student'>
      <h1>{props.campus.campusName}</h1>
      <img src={props.campusImage} alt="" />
      <h5>{props.campus.address1}</h5>
      <h5>{props.campus.address2}</h5>
      <p>{props.campus.description}</p>
      {props.studentsList.length > 0 ?
        props.studentsList.map(student => {
          return (
            <StudentCard
              image={student.image}
              firstName={student.firstName}
              lastName={student.lastName}
              campus={student.campus}
              onClick={props.onClick}
              buttonText={"Remove Student"}
            />
          )
        })
      : 
        <h3>There are no students currently registered to this campus.</h3>
        /* dropdown + button component */
    }
    </div>
  )
}

export default SingleCampusView
