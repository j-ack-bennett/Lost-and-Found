import { getLost, addLost } from '../apis/lost'

export const RECEIVE_LOST_PETS = 'RECEIVE_LOST_PETS'
export const ADD_LOST_PET = 'ADD_LOST_PET'

export function setLost (lost) {
  return {
    type: RECEIVE_LOST_PETS,
    lost: lost
  }
}

export function addNewLost (newLost) {
  return {
    type: ADD_LOST_PET,
    lost: newLost
  }
}

export function fetchLost () {
  return dispatch => {
    return getLost()
    .then(lost => {
      dispatch(setLost(lost))
      return null
    })
  }
}

export function saveLost (lost) {
  return dispatch => {
    return addLost(lost)
    .then(() => {
      // dispatch(addNewLost(lost))
      dispatch(fetchLost())
      return null
    })
  }
}