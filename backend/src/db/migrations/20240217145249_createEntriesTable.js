/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function (knex) {
    return knex.schema.createTable('entries', function (table) {
        table.increments('entry_id').primary()
        table.integer('person_id').unsigned()
        table
            .foreign('person_id')
            .references('person_id')
            .inTable('health_data')
            .onDelete('CASCADE')
        table.date('date')
        table.decimal('sleep_duration')
        table.integer('quality_of_sleep')
        table.integer('physical_activity_level')
        table.integer('stress_level')
        table.string('bmi_category')
        table.string('blood_pressure')
        table.integer('heart_rate')
        table.integer('daily_steps')
        table.string('sleep_disorder')
    })
}

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */

exports.down = async function (knex) {
    // Drop the foreign key constraints in 'entries' table first
    const hasEntriesTable = await knex.schema.hasTable('entries')
    if (hasEntriesTable) {
        await knex.schema.table('entries', function (table) {
            table.dropForeign('person_id')
        })
        await knex.schema.dropTable('entries')
    }
}
