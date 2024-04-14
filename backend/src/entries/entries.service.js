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
    const columnsToAvg = ["sleep_duration", "daily_steps", "stress_level", "heart_rate"]

    return knex("entries")
        .select(columnsToAvg.map(column => knex.raw(`AVG(${column}) AS ${column}_average`)))
        .where({ person_id: personId })
        .andWhere('date', '>=', knex.raw("(CURRENT_DATE - INTERVAL '30 days')"))
        .then(createdRecords => {
            const averages = {}
            columnsToAvg.forEach(column => {
                averages[`${column}_average`] = createdRecords[0][`${column}_average`]
            })

            // Loops through the object returned from the above query and converts string values to numbers
            for (const column in averages) {
                averages[column] = Number(averages[column])
            }

            console.log(averages)
            return averages
        })
}


/*
lastMonthBMI selects (for the personId provided) all of the bmi_category rows from the last 30 days, 
assigns each category a numerical value, averages those numerical values, rounds that average to a whole number,
converts the number back to its corresponding category ( as a string), and returns it
*/
function lastMonthBMI(personId) {
    return knex("entries")
        .select(knex.raw(`
        ROUND(AVG(CASE
            WHEN bmi_category = 'Underweight' THEN 1
            WHEN bmi_category = 'Normal' THEN 2
            WHEN bmi_category = 'Overweight' THEN 3
            ELSE 0
            END
        )) AS average_numerical_value
        `))
        .where({ person_id: personId })
        .andWhere('date', '>=', knex.raw("(CURRENT_DATE - INTERVAL '30 days')"))
        .then(result => {
            const averageNumericalValue = result[0].average_numerical_value
            let averageCategoryValue

            // Checks the number returned from the above query and converts it back to the appropriate category
            switch (averageNumericalValue) {
                case "1":
                    averageCategoryValue = "Underweight"
                    break
                case "2":
                    averageCategoryValue = "Normal"
                    break
                case "3":
                    averageCategoryValue = "Overweight"
                    break
                default:
                  averageCategoryValue = "N/A"
              }

            return averageCategoryValue
        })
}

module.exports = {
    list,
    create,
    readPerson,
    readEntry,
    update,
    deleteEntry,
    lastMonthAverages,
    lastMonthBMI,
}
