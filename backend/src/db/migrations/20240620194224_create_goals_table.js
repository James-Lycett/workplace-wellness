/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function (knex) {
    return knex.schema.createTable('goals', function (table) {
        table.integer('person_id').unsigned().primary()
        table
            .foreign('person_id')
            .references('person_id')
            .inTable('health_data')
            .onDelete('CASCADE')
        table.decimal('sleep_duration')
        table.integer('quality_of_sleep')
        table.integer('physical_activity_level')
        table.integer('stress_level')
        table.integer('daily_steps')
    })
}

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function (knex) {
    return knex.schema.dropTableIfExists('goals')
}
