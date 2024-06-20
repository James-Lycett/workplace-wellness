const knex = require('../db/connection')

function list () {
    return knex('goals').select('*').orderBy('person_id')
}
