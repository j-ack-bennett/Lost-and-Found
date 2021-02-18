import { RECEIVE_FOUND_PETS } from "../actions/found"
import { RECIEVE_LOST_PETS } from "../actions/lost"

const initialState = []

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case RECEIVE_LOST_PETS:
      return action.lost
    default:
      return state
  }
}

export default reducer