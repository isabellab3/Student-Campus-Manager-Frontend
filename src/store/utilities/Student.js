import allStudents from "../../dummyData/studentsData";

/*
  The purpose of this file is to: 
  1. Define the action types for adding and remove students from the entire student database.
  2. Define the action creators that return the actions to be funneled into the reducer, specifically those for controlling the students on the database.
  3. Defining the reducer function for adding and removing students from the database.
*/
// ACTION TYPES
const ADD_STUDENT = "ADD_STUDENT";
const DISPLAY_STUDENT = "DISPLAY_STUDENT";
const EDIT_STUDENT = "EDIT_STUDENT";
const REMOVE_STUDENT = "REMOVE_STUDENT";

// ACTION CREATORS
export const addStudent = newStudent => {
  // add student id somewhere
  return {
    type: ADD_STUDENT,
    payload: newStudent
  };
};
export const displayStudent = student => {
  return {
    type: DISPLAY_STUDENT,
    payload: student
  };
};
export const removeStudent = id => {
  // add campus id somewhere
  return {
    type: REMOVE_STUDENT,
    payload: id
  };
};
export const editStudent = newStudent => {
  // add campus id somewhere
  return {
    type: EDIT_STUDENT,
    payload: newStudent
  };
};

// ???
const initialState = {
  allStudents: allStudents
};

// REDUCER
export default (state = initialState, action) => {
  switch (action.type) {
    case ADD_STUDENT:
      let newStudent = action.payload
      return Object.assign({}, state, {
        allStudents: {...allStudents, newStudent}
      });
    case DISPLAY_STUDENT:
      return Object.assign({}, state, {
        firstName: action.payload.firstName,
        lastName: action.payload.lastName,
        image: action.payload.image,
        campus: action.payload.image
      });
    case REMOVE_STUDENT:
      // create a copy of the current state
      // place a blank at the index state.id

      return Object.assign({}, state, {
        allStudents: [...allStudents][state.id]
      });
    case EDIT_STUDENT:
      return Object.assign({}, state, {
        allStudents: allStudents
          .slice(0, action.payload.id)
          .concat([action.payload])
          .concat(allStudents.slice(action.payload.id + 1, allStudents.length))
      });
    default:
      return state;
  }
};
