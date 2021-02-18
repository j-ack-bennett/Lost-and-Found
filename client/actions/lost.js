


export const RECEIVE_LOST_PETS = 'RECEIVE_LOST_PETS'

export function setLost (lost) {
  return {
    type: RECEIVE_LOST_PETS,
    lost: lost
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