const connection = require("./connection")

function getFound(db = connection) {
  return db("found").select()
}
function getFoundPetsAndUsers(db = connection) {
  return db("users")
    .join("found", "found.user_id", "users.id")
    .select(
      "user_id",
      "found.id",
      "found.photo",
      "users.username",
      "users.email_address",
      "users.contact_details",
      "found.species"
    )
    .debug()
}

function addFound(species, photo, user_id, db = connection) {
  return db("found").insert({
    species: species,
    photo: photo,
    user_id: user_id,
  })
}

module.exports = {
  getFound,
  getFoundPetsAndUsers,
  addFound,
}
