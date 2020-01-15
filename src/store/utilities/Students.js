import allStudents from "../../dummyData/studentsData";

// ACTION TYPES
const ADD_STUDENT = "ADD_STUDENT";
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
      return Object.assign({}, state, {
        allStudents: [...allStudents, action.payload]
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
