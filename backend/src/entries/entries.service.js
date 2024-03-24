const knex = require("../db/connection")

function list() {
    return knex("entries").select("*").orderBy("entry_id")
}

function create(newEntryData) {
    console.log("Input data:", newEntryData)

    return knex("entries")
        .insert(newEntryData)
        .returning("*")
        .then(createdRecords => createdRecords[0])
        .catch(error => {
            console.error("Error creating entry:", error)
            throw error
        })
}

function readPerson(personId) {
    return knex("entries")
        .where({ person_id: personId })
        .orderBy("date", "desc")
}

function readEntry(entryId) {
    return knex("entries").where({ entry_id: entryId }).first()
}

function update(updatedEntryData) {
    return knex("entries")
        .where({ entry_id: updatedEntryData.entry_id })
        .update(updatedEntryData, "*")
}

function deleteEntry(entryId) {
    return knex("entries").where({ entry_id: entryId }).del()
}

module.exports = {
    list,
    create,
    readPerson,
    readEntry,
    update,
    deleteEntry,
}
