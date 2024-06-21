require('dotenv').config()
const fs = require('fs')
const path = require('path')

/**
 * @type { Object.<string, import("knex").Knex.Config> }
 */
module.exports = {
    development: {
        client: 'postgresql',
        connection: {
            host: process.env.SQL_CREDENTIALS_HOST,
            user: process.env.SQL_CREDENTIALS_USERNAME,
            password: process.env.SQL_CREDENTIALS_PASSWORD,
            database: process.env.SQL_CREDENTIALS_USER_DB,
            port: process.env.SQL_CREDENTIALS_PORT,
            ssl: {
                ca: fs.readFileSync(path.join(__dirname, './prod-ca-2021.crt')).toString(),
            },
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
            host: process.env.SQL_CREDENTIALS_HOST,
            user: process.env.SQL_CREDENTIALS_USERNAME,
            password: process.env.SQL_CREDENTIALS_PASSWORD,
            database: process.env.SQL_CREDENTIALS_USER_DB,
            port: process.env.SQL_CREDENTIALS_PORT,
            ssl: {
                ca: fs.readFileSync(path.join(__dirname, './prod-ca-2021.crt')).toString(),
            },
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
