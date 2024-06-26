const asyncErrorBoundary = require('../errors/asyncErrorBoundary')
const service = require('./goals.service')
const authenticateToken = require('../authentication/authenticateToken')

function validateField (value, type, criteria) {
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

function validateEnum (value, validValues) {
    return validValues.includes(value)
}

function validateInput (req, res, next) {
    const validationRules = {
        sleep_duration: { type: 'number', min: 0, max: 24 },
        quality_of_sleep: { type: 'number', min: 1, max: 10 },
        physical_activity_level: { type: 'number', min: 1, max: 10 },
        stress_level: { type: 'number', min: 1, max: 10 },
        daily_steps: { type: 'number', min: 1, max: 30000 },
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

async function goalsDataExists (req, res, next) {
    try {
        if (req.params.personId) {
            const { personId } = req.params

            const data = await service.read(personId)

            if (!data) {
                return next({
                    status: 404,
                    message: `Goals for "${personId}" do not exist`,
                })
            } else {
                res.locals.goalsData = data
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

    async function list (req, res) {
        // List is only available to admins?
        if (!req.user.adminFromToken) {
            return next({
                status: 403,
                //does this message make sense in this use case?
                message:
                    "Forbidden: You do not have access to this user's data",
            })
        }

        try {
            const data = await service.list()
            res.json({ data })
        } catch (error) {
            console.error(error)
            return next({
                status: 500,
                message: 'Error accessing goals',
            })
        }
    }

    function read (req, res, next) {
        try {
            const data = res.locals.goalsData

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

    async function create (req, res, next) {
        const requestGoalsData = req.body.data
        const newGoalsData = { ...requestGoalsData }

        try {
            const data = await service.create(newGoalsData)
            res.status(201).json({ data })
        } catch (error) {
            console.error(error)
            return next({
                status: 500,
                message: 'Error creating goals',
            })
        }
    }

    async function update (req, res) {
        try {
            const { person_id } = res.locals.goalsData
            const updatedGoals = { ...req.body.data, person_id }
            const result = await service.update(updatedGoals)
            res.json({ data: result[0] })
        } catch (error) {
            console.error(error)
            return next({
                status: 500,
                message: 'Error updating Goals',
            })
        }
    }
    async function deleteGoals (req, res, next) {
        try {
            const { personId } = req.params
            await service.deleteEntry(personId)
            res.sendStatus(204)
        } catch (error) {
            console.error(error)
            return next({
                status: 500,
                message: 'Error deleting goals',
            })
        }
    }
}

module.exports = {
    list: asyncErrorBoundary(list),
    read: [authenticateToken, asyncErrorBoundary(goalsDataExists), read],
    create: [validateInput, asyncErrorBoundary(create)],
    update: [
        authenticateToken,
        asyncErrorBoundary(goalsDataExists),
        asyncErrorBoundary(update),
    ],
    deleteGoals: [
        authenticateToken,
        asyncErrorBoundary(goalsDataExists),
        asyncErrorBoundary(deleteGoals),
    ],
}
