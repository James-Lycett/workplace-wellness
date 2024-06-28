const goalsData = require('./02-goalsData.json')

exports.seed = function (knex) {
    return knex
        .raw('TRUNCATE TABLE goals RESTART IDENTITY CASCADE')
        .then(function () {
            return knex('goals').insert(goalsData)
        })
        .catch(function (error) {
            console.error('Error seeding data:', error)
        })
}
