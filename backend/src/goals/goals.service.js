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

function read (personId) {
    return knex('goals').select('*').where({ person_id: personId }).first()
}

module.exports = {
    list,
    create,
    read,
}
