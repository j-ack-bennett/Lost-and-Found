const express = require('express')

const db = require('../db/found')

const router = express.Router()

router.get('/found', (req, res) => {
  db.getFound()
      .then(animals => {
          res.json({animals})
      })
      .catch(err => {
        console.log(err)
        res.status(500).json({ message: 'Something went wrong' })
      })
})

router.post('/found', (req, res) => {
  db.thatsMyPet()
  
})



module.exports = router