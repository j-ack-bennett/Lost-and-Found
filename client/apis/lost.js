import request from 'superagent'

import { getAuthorizationHeader } from 'authenticare/client'
const acceptJsonHeader = { Accept: 'application/json' }

const rootUrl = 'api/v1/lost'

export function getLost() {
  return request
    .get(rootUrl)
    .set(acceptJsonHeader)
    .then(res => res.body.animals)
    .catch(logError)
}

export function addLost(name, species, photo) {
  return request
    .post(rootUrl)
    .set(acceptJsonHeader)
    .set(getAuthorizationHeader())
    .send(name, species, photo)
    .then(res => res.body.animals)
    .catch(logError)
}

function logError (err) {
  if (err.message === 'Forbidden') {
    throw new Error('Only the user who added the animal may update and delete it')
  } else {
    console.error(
      'Error consuming the API (in client/apis/lost.js):',
      err.message
    )
    throw err
  }
}