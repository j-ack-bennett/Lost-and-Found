const connection = require('./connection')


function getLost(db= connection){
  return db('lost')
  .select()
}

function getLostPetsAndUsers(db=connection) {
  return db('users')
.join('lost', 'user_id')
.select()
}

function addLost(name, species, photo, db=connection) {
  return db('lost')
  .insert({name: name, species: species, photo: photo})
}

module.exports = {
  getLost,
  getLostPetsAndUsers,
  addLost,

}