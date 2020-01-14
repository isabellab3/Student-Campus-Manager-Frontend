import React from "react";
import PropTypes from "prop-types";

import "../views/CampusCard.css";

const CampusCard = props => {
  return (
    <div className="campus-card">
      <img src={props.campus.campusImage} alt="" />
      <div className="campus-card-info">
        <a className="campus-card-name" href={"/campus/" + props.campus.id}>
          {props.campus.campusName}
        </a>
        <p>(# students goes here)</p>
        <div className="campus-card-buttons">
          <a
            className="campus-card-edit"
            href={"/editcampus/" + props.campus.id}
          >
            edit
          </a>
          <p>{props.campus.campusName}</p>
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
