

exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex('found').del()
    .then(function () {
      // Inserts seed entries
      return knex('found').insert ([
          {id: 1, species: 'cat', photo:  'https://cdn.vox-cdn.com/thumbor/JBMFgJ9-BkDoC5qaYyVk3S0WtwQ=/0x0:2841x1171/1400x933/filters:focal(1808x359:2262x813):no_upscale()/cdn.vox-cdn.com/uploads/chorus_image/image/64760502/Screen_Shot_2019_07_18_at_4.16.52_PM.0.png', user_id: 1},
          {id: 2, species: 'cat', photo: 'https://cdn.shopify.com/s/files/1/0344/6469/files/Screen_Shot_2019-01-04_at_5.07.33_PM.png?v=1546639679', user_id: 1},
          {id: 3, species: 'dog', photo: 'https://cdn.shopify.com/s/files/1/0015/4874/6807/articles/weirddog1_1_1000x.jpg?v=1600702411', user_id: 1},
          {id: 4, species: 'dog', photo: 'https://i1.sndcdn.com/avatars-000208242028-o7xw0o-t500x500.jpg', user_id: 1},
          {id: 5, species: 'dog', photo: 'https://sadanduseless.b-cdn.net/wp-content/uploads/2020/05/sitting-cats11.jpg', user_id: 1}


      ])
    })
  }