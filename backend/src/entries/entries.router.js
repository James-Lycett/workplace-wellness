const router = require('express').Router({ mergeParams: true })
const controller = require('./entries.controller')
const methodNotAllowed = require('../errors/methodNotAllowed')

router.route('/').post(controller.create).all(methodNotAllowed)

router.route('/user/:personId').get(controller.readPerson).all(methodNotAllowed)

// Special route just to get kpi averages over the past thirty days for a specific user
router
    .route('/averages/:personId')
    .get(controller.readLastMonthAverages)
    .all(methodNotAllowed)

router
    .route('/:entryId')
    .get(controller.readEntry)
    .put(controller.update)
    .delete(controller.deleteEntry)
    .all(methodNotAllowed)

module.exports = router
