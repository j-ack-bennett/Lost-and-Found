const connection = require('./connection')


function getLost(db = connection){
  return db('lost')
  .select()
}

function getLostPetsAndUsers(db = connection) {
  return db('users')
.join('lost', 'user_id')
.select()
}

function addLost(name, species, photo, user_id, db = connection) {
  return db('lost')
  .insert({name: name, species: species, photo: photo, user_id: user_id})
}

module.exports = {
  getLost,
  getLostPetsAndUsers,
  addLost,
}