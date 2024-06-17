const asyncErrorBoundary = require("../errors/asyncErrorBoundary")
const service = require("./entries.service")
const authenticateToken = require("../authentication/authenticateToken")

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
        sleep_duration: { type: 'number', min: 0, max: 24 },
        stress_level: { type: 'number', min: 1, max: 10 },
        bmi_category: {
            type: "string",
            enum: ["Underweight", "Normal", "Overweight"],
            maxLength: 11
        },
        heart_rate: { type: 'number', min: 20, max: 600 },
        daily_steps: { type: 'number', min: 0, max: 100000 },
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

        if (
            !validateField(value, type, { maxLength, min, max }) ||
            (validValues && !validateEnum(value, validValues)) ||
            (custom && !custom(value))
        ) {
            return res.status(400).json({ error: `Invalid ${field}, ${field} must be a ${validationRules[field].type} with a maximum length of [${validationRules[field].max}]. Received: '${value}' of type: '${typeof value}'` })
        }
    }

    next()
}

async function entryExists(req, res, next) {
    const { entryId } = req.params
    const data = await service.readEntry(entryId)

    // Makes sure that the user requesting this data is the user that is logged in
    const { person_id } = data
    const { personIdFromToken } = req.user
    if (Number(personIdFromToken) !== person_id) {
        return res.status(403).json({ message: "Forbidden: You do not have access to this user's data" })
    }

    if (!data) {
        return next({
            status: 404,
            message: `Log entry "${entryId}" does not exist`,
        })
    } else {
        res.locals.entryData = data
        next()
    }
}

async function personExists(req, res, next) {
    const { personId } = req.params
    const data = await service.readPerson(personId)

    const { personIdFromToken } = req.user
    if (personIdFromToken !== personId) {
        return res.status(403).json({ message: "Forbidden: You do not have access to this user's data" })
    }

    if (!data) {
        return next({
            status: 404,
            message: `Person ID "${personId}" does not exist`,
        })
    } else {
        res.locals.userEntries = data
        next()
    }
}

async function create(req, res, next) {
    const requestEntryData = req.body.data
    const newEntryData = { ...requestEntryData }

    try {
        const data = await service.create(newEntryData)
        res.status(201).json({ data })
    } catch (error) {
        console.error(error)
        res.status(500).json({ error: error.message || "Error logging entry" })
    }
}

function readPerson(req, res, next) {
    try {
        const data = res.locals.userEntries
        res.json({ data })
    } catch (error) {
        console.error(error)
        res.status(500).json({ error: "Error finding user logs" })
    }
}

function readEntry(req, res, next) {
    try {
        const data = res.locals.entryData
        res.json({ data })
    } catch (error) {
        console.error(error)
        res.status(500).json({ error: "Error reading log entry" })
    }
}

async function update(req, res) {
    try {
        const { entry_id } = res.locals.entryData
        const updatedEntry = { ...req.body.data, entry_id }
        // console.log("Updated Entry:", updatedEntry)
        const result = await service.update(updatedEntry)
        res.json({ data: result[0] })
    } catch (error) {
        console.error(error)
        res.status(500).json({ error: "Error updating log entry" })
    }
}

async function deleteEntry(req, res, next) {
    try {
        const { entryId } = req.params
        await service.deleteEntry(entryId)
        res.sendStatus(204)
    } catch (error) {
        console.error(error)
        res.status(500).json({ error: "Error deleting entry" })
    }
}


/*
    lastMonthAverages calls both the query functions (service.lastMonthBMI handles bmi_category 
    string data differently than lastMonthAverages, which only handles numerical data) 
    from entries.service for the average of last month's kpi metrics and mashes them together in a 
    single object that looks like this:
    {
        data: {
            sleep_duration_average: number,
            daily_steps_average: number,
            stress_level_average: number,
            heart_rate_average: number,
            bmi_category_average: "string"
        }
    }
    and sends it in JSON format
*/
async function lastMonthAverages(req, res, next) {
    const { personId } = req.params

    // Makes sure that the user requesting this data is the user that is logged in
    const { personIdFromToken } = req.user
    if (personIdFromToken !== personId) {
        return res.status(403).json({ message: "Forbidden: You do not have access to this user's data" })
    }

    try {
        const numericalAverages = await service.lastMonthAverages(personId)
        const bmiAverage = await service.lastMonthBMI(personId)
        const averages = {
            ...numericalAverages,
            bmi_category_average: bmiAverage
        }

        
        res.json({ data: averages })
    } catch (error) {
        console.error(error)
        res.status(500).json({ error: "Error fetching last month averages from database"})
    }
}


/*
    Gets sleep duration total hours and average quality of sleep, combine them into a single object
    returns (in JSON):
    {
        data: {
            sleep_duration_total: n,
            quality_of_sleep_average: n
        }
    }
*/
async function lastMonthCompanyMetrics(req, res, next) {
    try {
        const totalHoursOfSleep = await service.lastMonthCompanyTotalSleep()
        const averageQualityOfSleep = await service.lastMonthCompanySleepQualityAverage()

        const data = {
            ...totalHoursOfSleep,
            ...averageQualityOfSleep
        }

        return data
    } catch (error) {
        console.error(error)
        res.status(500).json({ error: "Error fetching all last month averages from database"})
    }
}

module.exports = {
    create: [validateInput, asyncErrorBoundary(create)],
    readEntry: [
        authenticateToken,
        asyncErrorBoundary(entryExists),
        readEntry
    ],
    readPerson: [
        authenticateToken,
        asyncErrorBoundary(personExists),
        readPerson
    ],
    update: [
        authenticateToken,
        validateInput,
        asyncErrorBoundary(entryExists),
        asyncErrorBoundary(update),
    ],
    deleteEntry: [
        authenticateToken,
        asyncErrorBoundary(entryExists),
        asyncErrorBoundary(deleteEntry),
    ],
    readLastMonthAverages: [
        authenticateToken,
        asyncErrorBoundary(personExists),
        asyncErrorBoundary(lastMonthAverages)
    ],
    readLastMonthCompanyMetrics: [
        authenticateToken,
        asyncErrorBoundary(lastMonthCompanyMetrics)
    ],
    lastMonthCompanyMetrics
}
