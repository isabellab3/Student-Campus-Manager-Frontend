import React from "react"
import PropTypes from "prop-types"
import '../views/StudentCard.css'

const StudentCard = props => {
  console.log(props);
  return (
    <div className='student-card'>
      <img src={props.student.image} alt="" />
      <h3>
        {props.student.firstName} {props.student.lastName}
      </h3>
      <h4>{props.student.campus}</h4>
      <button onClick={props.onClick}>{props.buttonText}</button>
    </div>
  )
}

StudentCard.propTypes = {
  // image: PropTypes.string.isRequired,
  // firstName: PropTypes.string.isRequired,
  // lastName: PropTypes.string.isRequired,
  // campus: PropTypes.string.isRequired,
  student: PropTypes.object.isRequired,
  onClick: PropTypes.func.isRequired,
  buttonText: PropTypes.string.isRequired
}

export default StudentCard
