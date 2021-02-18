import { getFound, addFound } from '../apis/found'


export const RECEIVE_FOUND_PETS = 'RECEIVE_FOUND_PETS'
export const ADD_FOUND_PET = 'ADD_FOUND_PET'

export function setFound (found) {
  return {
    type: RECEIVE_FOUND_PETS,
    found: found
  }
}

export function addNewFound (newFound) {
  return {
    type: ADD_FOUND_PET,
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

export function saveFound (found) {
  return dispatch => {
    return addFound(found)
    .then(() => {
      dispatch(addNewFound(found))
      return null
    })
  }
}

