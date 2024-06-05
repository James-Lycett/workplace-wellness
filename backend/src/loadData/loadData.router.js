const router = require('express').Router({ mergeParams: true })
const controller = require('./loadData.controller')
const methodNotAllowed = require('../errors/methodNotAllowed')


router
    .route('/:userId')
    .get(controller.loadUserData)
    .all(methodNotAllowed)

module.exports = router