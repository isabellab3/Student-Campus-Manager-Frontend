import allCampuses from '../../dummyData/campusesData'

// ACTION TYPES
const GET_CAMPUS = 'GET_CAMPUS'

// ACTION CREATORS
export const getCampus = campusID => {
  // When backend is made:
  // make axios request
  // get the campus w/ id campusID
  // return campus object
  // for now: return campus 0
  const campus = allCampuses[0] ///////
  
  return {
    type: GET_CAMPUS,
    payload: campus
  }
}

const initialState = {}

// REDUCER
export default (state = initialState, action) => {
  switch(action.type) {
    case GET_CAMPUS:
      return action.payload
    default:
      return state
  }
}
