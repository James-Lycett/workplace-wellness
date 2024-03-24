import React from 'react'
import { Link, useParams } from 'react-router-dom'
import EmployeesList from './EmployeesList'
import DropDownMenuButton from '../utils/DropDownMenuButton'

export default function AdminReport() {
    const { userId } = useParams()
    // Placeholder admin goals data:
    const goals = {
        sleepHoursThisMonth: 1545,
        sleepHoursGoal: 2800,
        tasksMet: 80,
        tasksGoal: 128,
        companyMood: 'Decent',
    }
    // Options to pass down to <DropDownMenuButton/>
    const menuOptions = [
        {
            option: 'Profile',
            route: `/user/${userId}/home`,
        },
        {
            option: 'Careers',
            route: '/bp/careers',
        },
        {
            option: 'Contact',
            route: '/bp/about',
        },
        {
            option: 'Terms',
            route: '/bp/terms',
        },
        {
            option: 'About',
            route: '/bp/privacy',
        },
    ]
    // Calculate percent progress towards a goal
    //const sleepHoursProgress = (goals.sleepHoursThisMonth / goals.sleepHoursGoal) * 100
    //const tasksProgress = (goals.tasksMet / goals.tasksGoal) * 100
    // if we ever get around to making a backend route for this

    return (
        <div className="columns-2">
            <div className="break-after-column m-6">
                <div className="flex flex-row gap-3">
                    <div className="border-2 border-black rounded-xl text-center py-4 my-3 w-1/2">
                        <div className="mx-3 pb-2">
                            <h2 className="text-xl font-bold">
                                Employee Sleep Quality Goals
                            </h2>
                            <h3 className="text-primary-4 text-xl font-extrabold">
                                55% Completion
                            </h3>
                            <p className="mt-3">
                                Total{' '}
                                {goals.sleepHoursThisMonth.toLocaleString()} out
                                of {goals.sleepHoursGoal.toLocaleString()} hours
                                of sleep.
                            </p>
                        </div>
                    </div>
                    <div className=" rounded-xl text-center py-4 my-3 w-1/2">
                        <div className="mt-3">
                            <p className="mb-5">
                                Check out ways to improve your company numbers
                                by checking the report.
                            </p>
                            <Link
                                to={`/admin/${userId}/home`}
                                className="button-dark-rounded px-10 py-3 font-normal"
                            >
                                DASHBOARD
                            </Link>
                        </div>
                    </div>
                </div>
                <div>
                    <h1 className="text-3xl font-bold text-center mb-5">
                        Company Resources Available
                    </h1>
                    <p>
                        Our database complied a list of your company benefits in
                        regards to various benefits to support the mental health
                        and sleep quality of your faculty and staff. Here are
                        some of those benefits that you can learn more about
                        listed below: Mental Health Days Employee Assistance
                        Program (EAP) Health Insurance Coverage
                    </p>
                    <br />
                    <a
                        href="https://www.mayoclinichealthsystem.org/hometown-health/speaking-of-health/recharge-with-planned-mental-health-day"
                        className="text-blue-500 underline font-normal"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        Mental Health Days
                    </a>
                    <br />
                    <br />
                    <a
                        href="https://www.hhs.gov/about/agencies/asa/foh/bhs/employee-assistant-program/index.html"
                        className="text-blue-500 underline font-normal"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        Employee Assistance Program (EAP)
                    </a>
                    <br />
                    <br />
                    <a
                        href="https://www.healthcare.gov/"
                        className="text-blue-500 underline font-normal"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        Health Insurance Coverage
                    </a>
                </div>
            </div>
            <div className="bg-accent-background border-accent-1 border-2 rounded-md m-6">
                <div className="flex relative justify-center px-3 py-1">
                    <h2 className="text-2xl">Your Employees</h2>
                    <div className="absolute right-5 mt-2">
                        <DropDownMenuButton options={menuOptions} />
                    </div>
                </div>
                <hr
                    className="h-px border-0"
                    style={{ backgroundColor: '#000000' }}
                />
                <div className="flex justify-center px-3">
                    <Link
                        to="/register"
                        className="button-dark-rounded my-6 w-full ml-auto"
                    >
                        Register A New Employee
                    </Link>
                </div>
                <div className="overflow-y-auto h-96">
                    <EmployeesList />
                </div>
            </div>
        </div>
    )
}

/*
<select name="admin-options" id="admin-options">
                    <option value="">Menu</option>
                    <option value="profile">Profile</option>
                    <option value="report_history">Report History</option>
                    <option value="employees_list">Full List of Employees</option>
                    <option value="settings">Settings</option>
                    <option value="help_desk">IT Help Desk</option>
                </select>
*/
