const entriesController = require('../entries/entries.controller')
const dataService = require('../data/data.service')
const entriesService = require('../entries/entries.service')
const goalsService = require('../goals/goals.service')
const asyncErrorBoundary = require('../errors/asyncErrorBoundary')
const authenticateToken = require('../authentication/authenticateToken')

async function loadUserData (req, res, next) {
    const { userId } = req.params

    const { personIdFromToken } = req.user
    if (personIdFromToken !== userId) {
        return next({
            status: 403,
            message: "Forbidden: You do not have access to this user's data",
        })
    }

    try {
        const user = await dataService.read(userId)
        const entries = await entriesService.readPerson(userId)
        const goals = await goalsService.list()
        const averages = await entriesService.lastMonthAverages(userId)

        let data = {
            user: user,
            averages: averages,
            entries: entries,
            goals: goals[0],
        }

        if (user.admin) {
            // lastMonthCompanyMetrics is only available to admins
            if (!req.user.adminFromToken) {
                return next({
                    status: 403,
                    message:
                        "Forbidden: You do not have access to this user's data",
                })
            }
            const companyAverages =
                await entriesController.lastMonthCompanyAverages()
            const employees = await dataService.list()

            data = {
                ...data,
                companyAverages: companyAverages,
                employees: employees,
            }
        }

        res.status(200).json({ data })
    } catch (error) {
        console.error(error)
        return next({
            status: 500,
            message: 'Error loading user data',
        })
    }
}

module.exports = {
    loadUserData: [authenticateToken, asyncErrorBoundary(loadUserData)],
}
