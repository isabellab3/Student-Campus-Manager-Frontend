import React from "react";
import PropTypes from "prop-types";

import "../views/CampusCard.css";

const CampusCard = props => {
  console.log(props.buttonFunction);
  let button;
  if (props.buttonFunction == "remove") {
    button = <div className="remove">remove</div>;
  } else {
    button = <div className="unenroll">unenroll</div>;
  }

  return (
    <div className="campus-card">
      <a href={"/campus/" + props.campus.id}>
        <img src={props.campus.campusImage} alt="" />
      </a>
      <div className="campus-card-info">
        <a className="campus-card-name" href={"/campus/" + props.campus.id}>
          {props.campus.campusName}
        </a>
        <p>{props.campus.enrollments.length} students</p>
        <div className="campus-card-buttons">
          <a
            className="campus-card-edit"
            href={"/editcampus/" + props.campus.id}
          >
            {" "}
            edit{" "}
          </a>
          <div className="xbutton">{button}</div>
        </div>
      </div>
    </div>
  );
};

// StudentCard.propTypes = {
//   image: PropTypes.string.isRequired,
//   firstName: PropTypes.string.isRequired,
//   lastName: PropTypes.string.isRequired,
//   campus: PropTypes.string.isRequired,
//   onClick: PropTypes.func.isRequired,
//   buttonText: PropTypes.string.isRequired
// };

export default CampusCard;
