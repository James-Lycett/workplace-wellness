/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function (knex) {
    return knex.schema.createTable("health_data", function (table) {
        table.increments("person_id").primary()
        table.string("username", 50)
        table.boolean("admin")
        table.integer("dept_id", 3).nullable()
        table.string("gender", 10).nullable()
        table.integer("age", 3).nullable()
        table.string("occupation", 40).nullable()
        table.decimal("sleep_duration", 3, 1).nullable()
        table.integer("quality_of_sleep", 2).nullable()
        table.integer("physical_activity_level", 3).nullable()
        table.integer("stress_level", 2).nullable()
        table.string("bmi_category", 20).nullable()
        table.string("blood_pressure", 10).nullable()
        table.integer("heart_rate", 3).nullable()
        table.integer("daily_steps", 6).nullable()
        table.string("sleep_disorder", 40).nullable()

        // ...
    })
}

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function (knex) {
    return knex.schema.dropTable("health_data")
}

// migrations/YYYYMMDDHHMMSS_migration_name.js
