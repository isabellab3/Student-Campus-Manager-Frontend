import allStudents from '../../dummyData/studentsData'

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
