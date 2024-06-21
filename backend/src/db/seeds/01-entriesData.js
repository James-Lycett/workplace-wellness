/*
Not using this data anymore but will still keep it around if we wanna use it for tests or something
const entriesData = require("./01-entriesData.json")
*/
const { generator } = require('../utils/entriesGenerator')
const randomGeneratedEntries = generator(500)

exports.seed = function (knex) {
    return knex
        .raw('TRUNCATE TABLE entries RESTART IDENTITY CASCADE')
        .then(function () {
            return knex('entries').insert(randomGeneratedEntries)
        })
        .catch(function (error) {
            console.error('Error seeding data:', error)
        })
}
