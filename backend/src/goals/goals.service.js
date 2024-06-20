const knex = require('../db/connection')

function list () {
    return knex('goals').select('*').orderBy('person_id')
}

function create (newGoalsData) {
    return knex('goals')
        .insert(newGoalsData)
        .returning('*')
        .then(createdRecords => createdRecords[0])
}

module.exports = {
    list,
    create,
}
