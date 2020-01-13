// ACTION TYPES
const ADD_STUDENT = 'ADD_STUDENT'

// ACTION CREATORS
const addStudent = newStudent => {
  return {
    type: ADD_STUDENT,
    payload: newStudent
  }
}

// REDUCER
export default (state={}, action) => {
  switch(action.type) {
    case ADD_STUDENT:
      return action.payload
    default:
      return state ///
  }
}