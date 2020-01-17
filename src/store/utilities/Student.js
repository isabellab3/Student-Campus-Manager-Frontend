import allStudents from "../../dummyData/studentsData";
import axios from 'axios';

/*
  The purpose of this file is to: 
  1. Define the action types for adding and remove students from the entire student database.
  2. Define the action creators that return the actions to be funneled into the reducer, specifically those for controlling the students on the database.
  3. Defining the reducer function for adding and removing students from the database.
*/
// ACTION TYPES
const ADD_STUDENT = "ADD_STUDENT";
const GET_STUDENT = "GET_STUDENT";
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

export const getStudent = student => {
  // add campus id somewhere
  return {
    type: GET_STUDENT,
    payload: student
  };
};

// Return a campus object from the database, given its id
export const getStudentThunk = studentId => dispatch => {
  return axios
    // get campus with id campusId
    .get(`/api/students/${studentId}`)
    .then(res => res.data)
    .then(student =>  dispatch(getStudent(student)))
    .catch(err => console.log(err));
}



// ???
const initialState = {
  allStudents: allStudents
};

// REDUCER
export default (state = initialState, action) => {
  switch (action.type) {
    case ADD_STUDENT:
      return Object.assign({}, state, {
        allStudents: [...state.allStudents, action.payload]
      });

    case GET_STUDENT:
      return action.payload
    case REMOVE_STUDENT:
      // create a copy of the current state
      // place a blank at the index state.id

      return Object.assign({}, state, {
        allStudents: [...state.allStudents][state.id]
      });
    /*
      This works by replacing the old student with the updated student at the same spot.
      The action payload is the "new" student object coming in, which is basically the student
      we want to replace but with the newly edited info.
      We then slice the array of allStudents, forming a "pre" array of all students up to, but
      not including the old student we want to replace. 
      Then, we concatenate/add the new student where the old student was.
      Then, we concatenate the "post" array of all students after, but not including, the old 
      student we want to replace. 
      Thus, this reducer case updated the allStudent array with the edited student in place of 
      the old.
    */
    case EDIT_STUDENT:
      console.log(action);
      return Object.assign({}, state, {
        allStudents: state.allStudents
          .slice(0, action.payload.id)
          .concat(action.payload)
          .concat(allStudents.slice(action.payload.id + 1))
      });
    default:
      return state;
  }
};
