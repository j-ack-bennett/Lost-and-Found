


export const RECEIVE_FOUND_PETS = 'RECEIVE_FOUND_PETS'
export const ADD_FOUND_PETS = ADD_FOUND_PETS

export function setFound (found) {
  return {
    type: RECEIVE_FOUND_PETS,
    found: found
  }
}

export function addFound (newFound) {
  return {
    type: ADD_FOUND_PETS,
    found: newFound
  }
}
 

export function fetchFound () {
  return dispatch => {
    return getFound()
    .then(found => {
      dispatch(setFound(found))
      return null
    })
  }
}

export function saveFound (newFound) {
  return dispatch => {
    return newFound
    .then(res => {
      dispatch(addFound(found))
      return null
    })
  }
}

