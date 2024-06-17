/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function (knex) {
    return knex.schema.createTable("health_data", function (table) {
        table.increments("person_id").primary()
        table.string("username", 50).notNullable()
        table.string("password_hash").notNullable()
        table.boolean("admin").notNullable()
        table.string("gender", 10).nullable()
        table.integer("age", 3).nullable()
        table.string("occupation", 40).nullable()
    })
}

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function (knex) {
    return knex.schema.dropTable("health_data")
}
