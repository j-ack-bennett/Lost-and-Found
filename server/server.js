const express = require('express')
const path = require('path')

const authRoutes = require('./routes/auth')
const foundRoutes = require('./routes/found')
const server = express()

server.use(express.json())
server.use(express.static(path.join('server', 'public')))

server.use('/api/v1/auth', authRoutes)
server.use('/api/v1/found', foundRoutes)

module.exports = server
