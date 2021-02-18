


export const RECEIVE_LOST_PETS = 'RECEIVE_LOST_PETS'
export const ADD_LOST_PET = 'ADD_LOST_PET'

export function setLosts (lost) {
  return {
    type: RECEIVE_LOST_PETS,
    lost: lost
  }
}

export function addLost (newLost) {
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
    return addNewLost(lost)
    .then(() => {
      dispatch(addLost(lost))
      return null
    })
  }
}