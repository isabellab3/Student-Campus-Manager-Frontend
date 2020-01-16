import allCampuses from "../../dummyData/campusesData";

/*
  The purpose of this file is to: 
  1. Define the action types for adding and remove campuses from the entire campus database.
  2. Define the action creators that return the actions to be funneled into the reducer, specifically those for controlling the campuses on the database.
  3. Defining the reducer function for adding and removing campuses from the database.
*/

// ACTION TYPES
const GET_CAMPUS = "GET_CAMPUS";
const ADD_CAMPUS = "ADD_CAMPUS";
const EDIT_CAMPUS = "EDIT_CAMPUS";
const REMOVE_CAMPUS = "REMOVE_CAMPUS";

// ACTION CREATORS
export const getCampus = campusID => {
  // When backend is made:
  // make axios request
  // get the campus w/ id campusID
  // return campus object
  // for now: return campus 0
  const campus = allCampuses[0]; ///////

  return {
    type: GET_CAMPUS,
    payload: campus
  };
};
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
export const editCampus = newCampus => {
  return {
    type: EDIT_CAMPUS,
    payload: newCampus
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
    case EDIT_CAMPUS:
      console.log(action);
      return Object.assign({}, state, {
        allCampuses: state.allCampuses
          .slice(0, action.payload.id)
          .concat(action.payload)
          .concat(allCampuses.slice(action.payload.id + 1))
    });
    default:
      return state;
  }
};
