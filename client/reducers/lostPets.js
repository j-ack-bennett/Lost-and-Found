import { RECEIVE_LOST_PETS, ADD_LOST_PET } from "../actions/lost"

const initialState = []

const lostPets = (state = initialState, action) => {
  switch (action.type) {
    case RECEIVE_LOST_PETS:
      return action.lost
    case ADD_LOST_PET:
        return [...state, action.lost]
    default:
      return state
  }
}

export default lostPets