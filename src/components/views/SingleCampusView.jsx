import React from "react";
import StudentCard from "./StudentCard";
import "./SingleCampusView.css";

const SingleCampusView = props => {
  console.log(props.campus);
  return (
    <div>
      <img
        src={props.campus.campusImage}
        alt="campus image"
        id="campus"
        width="600px"
      />
      <div className="campus-right">
        <h1 id="campus-name">{props.campus.campusName}</h1>
        <p>{props.campus.description}</p>
      </div>
      <h5>{props.campus.address1}</h5>
      <h5>{props.campus.address2}</h5>
      {props.studentsList.length > 0 ? (
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
          );
        })
      ) : (
        <h3>There are no students currently registered to this campus.</h3>
      )
      /* dropdown + button component */
      }
    </div>
  );
};

export default SingleCampusView;
