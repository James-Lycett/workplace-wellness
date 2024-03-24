// Update with your config settings.
require("dotenv").config()

/**
 * @type { Object.<string, import("knex").Knex.Config> }
 */
module.exports = {
    development: {
        client: "postgresql",
        connection: {
            host: process.env.SQL_CREDENTIALS_HOST,
            user: process.env.SQL_CREDENTIALS_USER_DB,
            password: process.env.SQL_CREDENTIALS_PASSWORD,
            database: process.env.SQL_CREDENTIALS_USER_DB,
            ssl: true, // Enable SSL for secure connections
        },
        migrations: {
            tableName: "knex_migrations",
            directory: "src/db/migrations",
        },
        seeds: {
            directory: "src/db/seeds",
        },
    },
    production: {
        client: "postgresql",
        connection: {
            host: process.env.SQL_CREDENTIALS_HOST,
            user: process.env.SQL_CREDENTIALS_USER_DB,
            password: process.env.SQL_CREDENTIALS_PASSWORD,
            database: process.env.SQL_CREDENTIALS_USER_DB,
            ssl: true, // Enable SSL for secure connections
        },
        migrations: {
            tableName: "knex_migrations",
            directory: "src/db/migrations",
        },
        seeds: {
            directory: "src/db/seeds",
        },
    },
}
