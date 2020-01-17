import allCampuses from "../../dummyData/campusesData";
import axios from 'axios';

/*
  The purpose of this file is to: 
  1. Define the action types for adding and remove campuses from the entire campus database.
  2. Define the action creators that return the actions to be funneled into the reducer, specifically those for controlling the campuses on the database.
  3. Defining the reducer function for adding and removing campuses from the database.
*/

// ACTION TYPES
const GET_CAMPUS = "GET_CAMPUS";
const ADD_CAMPUS = "ADD_CAMPUS";
// const EDIT_CAMPUS = "EDIT_CAMPUS";
const REMOVE_CAMPUS = "REMOVE_CAMPUS";

// ACTION CREATORS
export const getCampus = campus => {
  // When backend is made:
  // make axios request
  // get the campus w/ id campusID
  // return campus object
  // for now: return campus 0
  //const campus = allCampuses[0]; ///////
  return {
    type: GET_CAMPUS,
    payload: campus
  };
};


// Return a campus object from the database, given its id
export const getCampusThunk = campusId => dispatch => {
  return axios
    // get campus with id campusId
    .get(`/api/campuses/${campusId}`)
    .then(res => res.data)
    .then(campus =>  dispatch(getCampus(campus)))
    .catch(err => console.log(err));
}

export const addCampus = newCampus => {
  // add campus id somewhere
  return {
    type: ADD_CAMPUS,
    payload: newCampus
  };
};

export const removeCampus = id => {
  // add campus id somewhere
  return {
    type: REMOVE_CAMPUS,
    payload: id
  };
};

const initialState = {
  allCampuses: allCampuses
};

// REDUCER
export default (state = initialState, action) => {
  switch (action.type) {
    case GET_CAMPUS:
      return action.payload;
    case ADD_CAMPUS:
      return Object.assign({}, state, {
        allCampuses: [...allCampuses, action.payload]
      });
    case REMOVE_CAMPUS:
      // create a copy of the current state
      // place a blank at the index state.id
      return Object.assign({}, state, {
        allCampuses: [...allCampuses][state.id]
      });
    default:
      return state;
  }
};
