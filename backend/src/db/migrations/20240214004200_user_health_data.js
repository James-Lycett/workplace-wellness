/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function (knex) {
    return knex.schema.createTable('health_data', function (table) {
        table.increments('person_id').primary()
        table.string('username', 50).notNullable()
        table.string('password_hash').notNullable()
        table.boolean('admin').notNullable()
        table.string('gender', 10).nullable()
        table.integer('age', 3).nullable()
        table.string('occupation', 40).nullable()
        table.string('sleep_disorder', 11).nullable()
    })
}

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */

exports.down = async function (knex) {
    // Drop the foreign key constraints in 'entries' table first if it exists
    const hasEntriesTable = await knex.schema.hasTable('entries')
    if (hasEntriesTable) {
        await knex.schema.table('entries', function (table) {
            table.dropForeign('person_id')
        })
    }

    // Now drop the 'health_data' table
    return knex.schema.dropTable('health_data')
}
