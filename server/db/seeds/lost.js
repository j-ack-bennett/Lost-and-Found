exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex('lost').del()
    .then(function () {
      // Inserts seed entries
      return knex('lost').insert ([
          {id: 1, name: 'Mozart',species: 'Cat', photo:  'https://i.imgur.com/4L4lteV.jpg', user_id: 1},
          {id: 2, name: 'Azlan', species: 'Cat', photo: 'https://c.files.bbci.co.uk/462C/production/_107846971_lion_king_disney.jpg', user_id: 1},
          {id: 3, name: 'Queen Elizabeth', species: 'Dog', photo: 'https://media.mercola.com/ImageServer/Public/2020/April/Nonlead/wolf-puppy.jpg', user_id: 1},
          {id: 4, name: 'Tiny', species: 'Dog', photo: 'https://merchdope.com/wp-content/uploads/2018/07/largest-dog-breed.jpg', user_id: 1},
          {id: 5, name: 'Archimedes', species: 'Dog', photo: 'https://www.armadatekstil.net/wp-content/uploads/2014/03/smallest-dog-in-the-world-breed.jpg', user_id: 1}
      ])
    })
  }