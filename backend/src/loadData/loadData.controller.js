const dataController = require("../data/data.controller")
const entriesController = require("../entries/entries.controller")
const dataService = require("../data/data.service")
const entriesService = require("../entries/entries.service")
const asyncErrorBoundary = require("../errors/asyncErrorBoundary")


async function loadUserData(req, res, next) {
    const { userId } = req.params
    const user = await dataService.read(userId)
    const entries = await entriesService.readPerson(userId)
    const averages = await entriesService.lastMonthAverages(userId)

    let data = {
        user: user,
        averages: averages,
        entries: entries
    }

    if (user.admin) {
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

module.exports = { loadUserData }
