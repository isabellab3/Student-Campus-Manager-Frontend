import allCampuses from "../../dummyData/campusesData";

/*
  The purpose of this file is to: 
  1. Define the action types for adding and remove campuses from the entire campus database.
  2. Define the action creators that return the actions to be funneled into the reducer, specifically those for controlling the campuses on the database.
  3. Defining the reducer function for adding and removing campuses from the database.
*/
// ACTION TYPES
const ADD_CAMPUS = "ADD_CAMPUS";
// const EDIT_CAMPUS = "EDIT_CAMPUS";
const REMOVE_CAMPUS = "REMOVE_CAMPUS";

// ACTION CREATORS
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

// ???
const initialState = {
  allCampuses: allCampuses
};

// REDUCER
export default (state = initialState, action) => {
  switch (action.type) {
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
