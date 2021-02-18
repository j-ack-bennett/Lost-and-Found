import { RECEIVE_FOUND_PETS, ADD_FOUND_PET } from '../actions/found'

const initialState =  []

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case RECEIVE_FOUND_PETS:
      return action.found
    case ADD_FOUND_PET:
      return [...state, action.found]
    default:
      return state
  }
}



export default reducer