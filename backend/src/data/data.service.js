const knex = require("../db/connection")

function list() {
    return knex("health_data").select("*").orderBy("person_id")
}

function create(newHealthData) {
    return knex("health_data")
        .insert(newHealthData)
        .returning("*")
        .then(createdRecords => createdRecords[0])
}

function read(personId) {
    return knex("health_data")
        .select("*")
        .where({ person_id: personId })
        .first()
}

function readByUsername(username) {
    return knex("health_data").select("*").where({ username: username }).first()
}

function update(updatedHealthData) {
    return knex("health_data")
        .where({ person_id: updatedHealthData.person_id })
        .update(updatedHealthData, "*")
}

async function deleteHealthData(personId) {
    try {
        await knex.transaction(async trx => {
            await trx("health_data").where({ person_id: personId }).del()
            await trx("entries").where({ person_id: personId }).del()
        })
        return "User was successfully deleted."
    } catch (error) {
        console.error(error)
        return "Failed to delete user"
    }
}

module.exports = {
    list,
    create,
    read,
    readByUsername,
    update,
    deleteHealthData,
}
