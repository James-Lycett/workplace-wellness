const router = require("express").Router({ mergeParams: true })
const controller = require("./entries.controller")
const methodNotAllowed = require("../errors/methodNotAllowed")

router
    .route("/")
    .get(controller.list)
    .post(controller.create)
    .all(methodNotAllowed)

router.route("/user/:personId").get(controller.readPerson).all(methodNotAllowed)

router
    .route("/:entryId")
    .get(controller.readEntry)
    .put(controller.update)
    .delete(controller.deleteEntry)
    .all(methodNotAllowed)

module.exports = router
