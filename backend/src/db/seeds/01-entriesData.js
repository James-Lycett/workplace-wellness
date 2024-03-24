const entriesData = require("./01-entriesData.json")

exports.seed = function (knex) {
    return knex
        .raw("TRUNCATE TABLE entries RESTART IDENTITY CASCADE")
        .then(function () {
            return knex("entries").insert(entriesData)
        })
        .catch(function (error) {
            console.error("Error seeding data:", error)
        })
}
