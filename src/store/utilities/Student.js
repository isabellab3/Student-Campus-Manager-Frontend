import allStudents from '../../dummyData/studentsData'

/*
  The purpose of this file is to: 
  1. Define the action types for adding and remove students from the entire student database.
  2. Define the action creators that return the actions to be funneled into the reducer, specifically those for controlling the students on the database.
  3. Defining the reducer function for adding and removing students from the database.
*/
// ACTION TYPES
const ADD_STUDENT = 'ADD_STUDENT'

// ACTION CREATORS
export const addStudent = newStudent => {
  // add student id somewhere
  return {
    type: ADD_STUDENT,
    payload: newStudent
  }
}

// ???
const initialState = {
  allStudents: allStudents
}

// REDUCER
export default (state = initialState, action) => {
  switch(action.type) {
    case ADD_STUDENT:
      return Object.assign({}, state, {
        allStudents: [
          ...allStudents, 
          action.payload
        ]
      })
    default:
      return state
  }
}
