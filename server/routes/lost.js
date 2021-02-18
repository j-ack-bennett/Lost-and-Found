const express = require('express')
const { getTokenDecoder } = require('authenticare/server')

const db = require('../db/lost')

const router = express.Router()

router.get('/', (req,res) => {
  db.getLostPetsAndUsers()
    .then(animals => {
      res.json({animals})
    })
    .catch(err => {
			console.log(err)
			res.status(500).json({ message: 'Something went wrong' })
		})
})

router.post('/', getTokenDecoder(), (req,res) => {
  db.addLost(req.body.name, req.body.species, req.body.photo, req.user.id)
    .then(() => {
      res.status(200).json({ message: 'OK' })
      return null
    })
    .catch(err => {
			console.log(err)
			res.status(500).json({ message: 'Something went wrong' })
		})
})

module.exports = router