const connection = require('./connection')


function getLost(db = connection){
  return db('lost')
  .select()
}

function getLostPetsAndUsers(db = connection) {
  return db('users') 
.join('lost', 'lost.user_id', 'users.id')
.select('user_id', 'lost.id', 'lost.name', 'lost.photo','users.username', 'users.email_address', 'users.contact_details', 'lost.species')
.debug()
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