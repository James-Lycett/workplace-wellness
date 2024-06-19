const entriesController = require("../entries/entries.controller")
const dataService = require("../data/data.service")
const entriesService = require("../entries/entries.service")
const asyncErrorBoundary = require("../errors/asyncErrorBoundary")
const authenticateToken = require("../authentication/authenticateToken")


async function loadUserData(req, res, next) {
    const { userId } = req.params

    const { personIdFromToken } = req.user
    if (personIdFromToken !== userId ) {
        return next({ 
            status: 403,
            message: "Forbidden: You do not have access to this user's data"
        })
    }

    const user = await dataService.read(userId)
    const entries = await entriesService.readPerson(userId)
    const averages = await entriesService.lastMonthAverages(userId)

    let data = {
        user: user,
        averages: averages,
        entries: entries
    }

    if (user.admin) {
        // lastMonthCompanyMetrics is only available to admins
        if (!req.user.adminFromToken) {
            return next({ 
                status: 403,
                message: "Forbidden: You do not have access to this user's data"
            })
        }
        const companyMetrics = await entriesController.lastMonthCompanyMetrics()
        const employees = await dataService.list()

        data = {
            ...data,
            companyMetrics: companyMetrics,
            employees: employees
        }
    }

    res.json({ data })
}

module.exports = {
    loadUserData: [authenticateToken, asyncErrorBoundary(loadUserData)]
}
