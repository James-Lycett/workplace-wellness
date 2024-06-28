const knex = require('../db/connection')

function create(newEntryData) {
    return knex('entries')
        .insert(newEntryData)
        .returning('*')
        .then((createdRecords) => createdRecords[0])
        .catch((error) => {
            console.error('Error creating entry:', error)
            throw error
        })
}

function readPerson(personId) {
    return knex('entries')
        .where({ person_id: personId })
        .andWhere('date', '<=', knex.raw('CURRENT_DATE'))
        .orderBy('date', 'desc')
}

function readEntry(entryId) {
    return knex('entries').where({ entry_id: entryId }).first()
}

function update(updatedEntryData) {
    return knex('entries')
        .where({ entry_id: updatedEntryData.entry_id })
        .update(updatedEntryData, '*')
}

function deleteEntry(entryId) {
    return knex('entries').where({ entry_id: entryId }).del()
}

/* 
lastMonthAverages selects (for the personId provided) numerical kpis from the last 30 days of entries, averages each one,
rounds the result to the right decimal place, and returns the result.
Returns an object that looks like this:
    {
        sleep_duration_average: n,
        daily_steps_average: n,
        stress_level_average: n,
        heart_rate_average: n
    }
*/
function lastMonthAverages(personId) {
    const columnsToAvg = [
        'sleep_duration',
        'daily_steps',
        'stress_level',
        'heart_rate',
        'quality_of_sleep',
    ]

    return knex('entries')
        .select(
            columnsToAvg.map((column) =>
                knex.raw(`AVG(${column}) AS ${column}_average`)
            )
        )
        .where({ person_id: personId })
        .andWhere('date', '<=', knex.raw('CURRENT_DATE'))
        .andWhere('date', '>=', knex.raw("(CURRENT_DATE - INTERVAL '30 days')"))
        .then((createdRecords) => {
            const averages = {}
            columnsToAvg.forEach((column) => {
                averages[`${column}_average`] =
                    createdRecords[0][`${column}_average`]
            })

            // Loops through the object returned from the above query and converts string values to numbers
            for (const column in averages) {
                averages[column] = Number(averages[column])
            }

            return averages
        })
}

// Just like lastMonthAverages but for the whole company rather than a single user
function lastMonthCompanyAverages(personId) {
    const columnsToAvg = [
        'sleep_duration',
        'daily_steps',
        'stress_level',
        'heart_rate',
        'quality_of_sleep',
    ]

    return knex('entries')
        .select(
            columnsToAvg.map((column) =>
                knex.raw(`AVG(${column}) AS ${column}_average`)
            )
        )
        .andWhere('date', '<=', knex.raw('CURRENT_DATE'))
        .andWhere('date', '>=', knex.raw("(CURRENT_DATE - INTERVAL '30 days')"))
        .then((createdRecords) => {
            const averages = {}
            columnsToAvg.forEach((column) => {
                averages[`${column}_average`] =
                    createdRecords[0][`${column}_average`]
            })

            // Loops through the object returned from the above query and converts string values to numbers
            for (const column in averages) {
                averages[column] = Number(averages[column])
            }

            return averages
        })
}

module.exports = {
    create,
    readPerson,
    readEntry,
    update,
    deleteEntry,
    lastMonthAverages,
    lastMonthCompanyAverages,
}
