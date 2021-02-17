const express = require('express')

const db = require('../db/found')

const router = express.Router()

router.get('/found', (req, res) => {
  db.getFound()
    .then(animals => {
      res.json({ animals })
    })
    .catch(err => {
      console.log(err)
      res.status(500).json({ message: 'Something went wrong' })
    })
})

router.post('/found', (req, res) => {
  db.addFound(req.body.species, req.body.photo)
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