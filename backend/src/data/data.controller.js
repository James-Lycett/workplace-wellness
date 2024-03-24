const asyncErrorBoundary = require("../errors/asyncErrorBoundary")
const service = require("./data.service")

function validateField(value, type, criteria) {
    switch (type) {
        case "string":
            return (
                typeof value === "string" && value.length <= criteria.maxLength
            )
        case "boolean":
            return typeof value === "boolean"
        case "number":
            return (
                typeof value === "number" &&
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
        username: { type: "string", maxLength: 50 },
        admin: { type: "boolean" },
        gender: { type: "string", enum: ["Male", "Female"] },
        age: { type: "number", min: 0, max: 200 },
        sleep_duration: { type: "number", min: 0, max: 24 },
        quality_of_sleep: { type: "number", min: 1, max: 10 },
        physical_activity_level: { type: "number", min: 0, max: 1440 },
        stress_level: { type: "number", min: 1, max: 10 },
        bmi_category: {
            type: "string",
            enum: ["Underweight", "Normal", "Overweight"],
        },
        blood_pressure: { type: "string" },
        heart_rate: { type: "number", min: 20, max: 600 },
        daily_steps: { type: "number", min: 0, max: 100000 },
        sleep_disorder: {
            type: "string",
            enum: ["None", "Insomnia", "Sleep Apnea"],
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
                return res.status(400).json({ error: `Invalid ${field}` })
            }
        }
    }

    next()
}

async function healthDataExists(req, res, next) {
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
}

async function healthDataExists(req, res, next) {
    if (req.params.personId) {
        // For personId validation
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
    } else if (req.params.username) {
        // For username validation
        const { username } = req.params
        const userData = await service.readByUsername(username)

        if (!userData) {
            return next({
                status: 404,
                message: `User with username "${username}" not found`,
            })
        } else {
            res.locals.healthData = userData
            next()
        }
    } else {
        return next({
            status: 400,
            message: "Invalid route. Missing parameter.",
        })
    }
}

async function list(req, res) {
    try {
        const data = await service.list()
        res.json({ data })
    } catch (error) {
        console.error(error)
        res.status(500).json({ error: "Error accessing health data" })
    }
}

async function create(req, res, next) {
    const requestHealthData = req.body.data
    const newHealthData = { ...requestHealthData }

    try {
        const data = await service.create(newHealthData)
        res.status(201).json({ data })
    } catch (error) {
        console.error(error)
      
        console.error(error.stack)

        res.status(500).json({ error: 'Error creating health data' })
    }
}

function read(req, res, next) {
    try {
        const data = res.locals.healthData
        res.json({ data })
    } catch (error) {
        console.error(error)
        res.status(500).json({ error: "Error reading health data" })
    }
}

async function update(req, res) {
    try {
        const { person_id } = res.locals.healthData
        const updatedHealthData = { ...req.body.data, person_id }
        // console.log("Updated Health Data:", updatedHealthData)
        const result = await service.update(updatedHealthData)
        res.json({ data: result[0] })
    } catch (error) {
        console.error(error)
        res.status(500).json({ error: "Error updating health data" })
    }
}

async function deleteHealthData(req, res, next) {
    try {
        const { personId } = req.params
        await service.deleteHealthData(personId)
        res.sendStatus(204)
    } catch (error) {
        console.error(error)
        res.status(500).json({ error: "Error deleting health data" })
    }
}

module.exports = {
    list: asyncErrorBoundary(list),
    create: [validateInput, asyncErrorBoundary(create)],
    read: [asyncErrorBoundary(healthDataExists), read],
    readByUsername: [asyncErrorBoundary(healthDataExists), read],
    update: [
        validateInput,
        asyncErrorBoundary(healthDataExists),
        asyncErrorBoundary(update),
    ],
    deleteHealthData: [
        asyncErrorBoundary(healthDataExists),
        asyncErrorBoundary(deleteHealthData),
    ],
}
