const { Router } = require('express')

//users.routes.js
const usersRoutes = require('./users.routes')
const filmRoutes = require('./film.routes')

const routes = Router()

routes.use('/user', usersRoutes)
routes.use('/film', filmRoutes)

//film.routes.js

//tag.routes.js

module.exports = routes