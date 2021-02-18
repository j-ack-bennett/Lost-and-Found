import request from 'superagent'

import { getAuthorizationHeader } from 'authenticare/client'
const acceptJsonHeader = { Accept: 'application/json' }

const rootUrl = 'api/v1/found'

export function getFound() {
  return request
    .get(rootUrl)
    .set(acceptJsonHeader)
    .then(res => res.body.animals)
    .catch(logError)
}

export function addFound(species, photo) {
  return request 
    .post(rootUrl)
    .set(acceptJsonHeader)
    .set(getAuthorizationHeader())
    .send(species, photo)
    .then(res => res.body.animals)
    .catch(logError)
}

function logError (err) {
  if (err.message === 'Forbidden') {
    throw new Error('Only the user who added the animal may update and delete it')
  } else {
    console.error(
      'Error consuming the API (in client/apis/found.js):',
      err.message
    )
    throw err
  }
}
