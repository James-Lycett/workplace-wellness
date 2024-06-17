//const healthData = require("./00-healthData.json") **old seeds*
const healthData = require("./modifiedUserSeeds2.json")

exports.seed = function (knex) {
    return knex
        .raw("TRUNCATE TABLE health_data RESTART IDENTITY CASCADE")
        .then(function () {
            return knex("health_data").insert(healthData)
        })
        .catch(function (error) {
            console.error("Error seeding data:", error)
        })
}
