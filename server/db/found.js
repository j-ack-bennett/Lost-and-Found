const connection = require('./connection')

function getFound(db= connection){
  return db('found')
  .select()
}
function getFoundPetsAndUsers(db=connection) {
  return db('users')
.join('found', 'found.user_id', 'users.id')
.select()
}

function addFound(species, photo, db=connection) {
  return db('found')
  .insert({species: species, photo: photo})
}




module.exports = {
  getFound,
  getFoundPetsAndUsers,
  addFound

}