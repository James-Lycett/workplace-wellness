// Update with your config settings.
require('dotenv').config()

/**
 * @type { Object.<string, import("knex").Knex.Config> }
 */
module.exports = {
    development: {
        client: 'postgresql',
        connection: {
            connectionString: process.env.DATABASE_URL,
            ssl: true,
        },
        migrations: {
            tableName: 'knex_migrations',
            directory: 'src/db/migrations',
        },
        seeds: {
            directory: 'src/db/seeds',
        },
    },
    production: {
        client: 'postgresql',
        connection: {
            connectionString: process.env.DATABASE_URL_INTERNAL,
            ssl: true,
        },
        migrations: {
            tableName: 'knex_migrations',
            directory: 'src/db/migrations',
        },
        seeds: {
            directory: 'src/db/seeds',
        },
    },
}
