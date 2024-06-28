const knex = require('../connection')
const cron = require('node-cron')

function read(personId) {
    return knex('health_data')
        .select('*')
        .where({ person_id: personId })
        .first()
}

// Arbitrary person_id to query, hopefully doesn't get deleted
const personId = 1

// Runs every 3 days at midnight. See https://www.npmjs.com/package/node-cron for details on this schedule syntax
cron.schedule('0 0 */3 * *', async () => {
    try {
        const data = await read(personId)
        console.log('Session refreshed with data:', data)
    } catch (error) {
        console.error('Error refreshing session:', error)
    }
})

// Keeps the process running instead of node's default behavior of exiting a script after all tasks have been completed
process.stdin.resume()
