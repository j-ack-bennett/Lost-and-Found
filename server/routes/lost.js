const express = require('express')

const db = require('../db/lost')

const router = express.Router()

router.get('/lost', (req,res) => {
  db.getLost()
    .then(animals => {
      res.json({animals})
    })
    .catch(err => {
			console.log(err)
			res.status(500).json({ message: 'Something went wrong' })
		})
})

router.post('/lost', (req,res) => {
  db.addLost(req.body.name, req.body.species, req.body.photo)
    .then(() => {
      res.status(200).json({ message: 'OK' })
      return null
    })
    .catch(err => {
			console.log(err)
			res.status(500).json({ message: 'Something went wrong' })
		})
})