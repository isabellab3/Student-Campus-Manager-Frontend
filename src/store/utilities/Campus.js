import allCampuses from '../../dummyData/campusData'

// ACTION TYPES
const GET_CAMPUS = 'GET_CAMPUS'

// ACTION CREATORS
export const getCampus = campusID => {

  // get the campus w/ campusID

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
