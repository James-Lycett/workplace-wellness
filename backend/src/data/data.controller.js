const asyncErrorBoundary = require('../errors/asyncErrorBoundary')
const service = require('./data.service')
const bcrypt = require('bcrypt')
const authenticateToken = require('../authentication/authenticateToken')

function validateField(value, type, criteria) {
    switch (type) {
        case 'string':
            return (
                typeof value === 'string' && value.length <= criteria.maxLength
            )
        case 'boolean':
            return typeof value === 'boolean'
        case 'number':
            return (
                typeof value === 'number' &&
                value >= criteria.min &&
                value <= criteria.max
            )
        default:
            return false
    }
}

function validateEnum(value, validValues) {
    return validValues.includes(value)
}

function validateInput(req, res, next) {
    const validationRules = {
        username: { type: 'string', maxLength: 50 },
        admin: { type: 'boolean' },
        gender: { type: 'string', enum: ['Male', 'Female'], maxLength: 6 },
        age: { type: 'number', min: 0, max: 200 },
        occupation: { type: 'string', maxLength: 40 },
        sleep_disorder: {
            type: 'string',
            enum: ['None', 'Insomnia', 'Sleep Apnea'],
            maxLength: 11,
        },
    }

    for (const field in validationRules) {
        const value = req.body.data[field]
        const {
            type,
            maxLength,
            enum: validValues,
            min,
            max,
            custom,
        } = validationRules[field]

        if (value !== null && value !== undefined) {
            if (
                !validateField(value, type, { maxLength, min, max }) ||
                (validValues && !validateEnum(value, validValues)) ||
                (custom && !custom(value))
            ) {
                return next({
                    status: 400,
                    message: `Invalid ${field}, ${field} must be a ${
                        validationRules[field].type
                    } with a maximum length of [${
                        validationRules[field].max
                    }]. Received: '${value}' of type: '${typeof value}'`,
                })
            }
        }
    }

    next()
}

async function healthDataExists(req, res, next) {
    try {
        if (req.params.personId) {
            const { personId } = req.params

            const data = await service.read(personId)

            if (!data) {
                return next({
                    status: 404,
                    message: `Health data for Person ID "${personId}" does not exist`,
                })
            } else {
                res.locals.healthData = data
                next()
            }
        } else {
            return next({
                status: 400,
                message: 'Invalid route. Missing parameter.',
            })
        }
    } catch (error) {
        console.error(error)
        return next({
            status: 500,
            message: 'Error validating user exists',
        })
    }
}

async function list(req, res) {
    // List is only available to admins
    if (!req.user.adminFromToken) {
        return next({
            status: 403,
            message: "Forbidden: You do not have access to this user's data",
        })
    }

    try {
        const data = await service.list()
        res.json({ data })
    } catch (error) {
        console.error(error)
        return next({
            status: 500,
            message: 'Error accessing health data',
        })
    }
}

// Checks if username is already taken before create()
async function duplicateUsernameExists(req, res, next) {
    const { username } = req.body.data
    const data = await service.readByUsername(username)
    if (data) {
        return next({
            status: 409,
            message: `Username '${username}' already exists`,
        })
    } else {
        next()
    }
}

async function create(req, res, next) {
    const {
        username,
        password,
        age,
        occupation,
        admin,
        gender,
        sleep_disorder,
    } = req.body.data

    // Encrypts the user's password before storing in db
    const salt = await bcrypt.genSalt(10)
    const passwordHash = await bcrypt.hash(password, salt)

    const newHealthData = {
        username,
        age,
        occupation,
        admin,
        gender,
        sleep_disorder,
        password_hash: passwordHash,
    }

    try {
        const data = await service.create(newHealthData)
        res.status(201).json({ data })
    } catch (error) {
        console.error(error)
        return next({
            status: 500,
            message: 'Error creating health data',
        })
    }
}

function read(req, res, next) {
    try {
        const data = res.locals.healthData

        // Makes sure that the user requesting this data is the user that is logged in
        const { personIdFromUser } = data.person_id
        const { personIdFromToken } = req.user
        if (personIdFromToken !== personIdFromUser) {
            return next({
                status: 403,
                message:
                    "Forbidden: You do not have access to this user's data",
            })
        }

        res.json({ data })
    } catch (error) {
        console.error(error)
        return next({
            status: 500,
            message: 'Error reading health data',
        })
    }
}

async function update(req, res) {
    try {
        const { person_id } = res.locals.healthData

        // Makes sure that the user requesting this data is the user that is logged in, or is an admin
        const { personIdFromToken } = req.user
        if (personIdFromToken !== person_id && !req.user.adminFromToken) {
            return next({
                status: 403,
                message:
                    "Forbidden: You do not have access to this user's data",
            })
        }

        const updatedHealthData = { ...req.body.data, person_id }
        const result = await service.update(updatedHealthData)
        res.json({ data: result[0] })
    } catch (error) {
        console.error(error)
        return next({
            status: 500,
            message: 'Error updating health data',
        })
    }
}

async function deleteHealthData(req, res, next) {
    try {
        const { personId } = req.params

        // Makes sure that the user requesting this data is the user that is logged in, or is an admin
        const { personIdFromToken } = req.user
        if (personIdFromToken !== personId && !req.user.adminFromToken) {
            return next({
                status: 403,
                message:
                    "Forbidden: You do not have access to this user's data",
            })
        }

        await service.deleteHealthData(personId)

        res.sendStatus(204)
    } catch (error) {
        console.error(error)
        return next({
            status: 500,
            message: 'Error deleting health data',
        })
    }
}

module.exports = {
    list: [authenticateToken, asyncErrorBoundary(list)],
    create: [
        validateInput,
        asyncErrorBoundary(duplicateUsernameExists),
        asyncErrorBoundary(create),
    ],
    read: [authenticateToken, asyncErrorBoundary(healthDataExists), read],
    update: [
        authenticateToken,
        validateInput,
        asyncErrorBoundary(healthDataExists),
        asyncErrorBoundary(update),
    ],
    deleteHealthData: [
        authenticateToken,
        asyncErrorBoundary(healthDataExists),
        asyncErrorBoundary(deleteHealthData),
    ],
}
