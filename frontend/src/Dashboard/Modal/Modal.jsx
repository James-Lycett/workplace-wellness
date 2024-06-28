import React, { useEffect, useState } from 'react'
import ActivityLogForm from './ActivityLogForm'
import AddNewEmployeeForm from './AddNewEmployeeForm'
import EditEmployeeForm from './EditEmployeeForm'
import EditGoal from './EditGoal'
import {
    createEntry,
    createUser,
    listUsers,
    updateGoals,
    updateUser,
} from '../../utils/api'

export default function Modal({
    setIsModalOpen,
    isModalOpen,
    setEmployees,
    loadData,
    userId,
}) {
    const [entry, setEntry] = useState({
        person_id: userId,
        sleep_duration: '',
        bmi_category: 'Normal',
        daily_steps: '',
        stress_level: '',
        heart_rate: '',
        date: new Date().toISOString(),
    })
    const [employee, setEmployee] = useState({
        username: '',
        age: '',
        gender: '',
        sleep_disorder: '',
        occupation: '',
        password: '',
        admin: false,
    })
    const [goal, setGoal] = useState(0)
    const [allGoals, setAllGoals] = useState({})
    const [label, setLabel] = useState('')
    const [error, setError] = useState(null)

    useEffect(() => {
        if (isModalOpen.option === 'editEmployee') {
            setEmployee(isModalOpen.employeeFromEdit)
        }
        if (isModalOpen.option === 'editGoal') {
            setLabel(isModalOpen.label)
            setAllGoals(isModalOpen.goals)
            const specificGoal =
                isModalOpen.goals[labelToFieldMap[isModalOpen.label]]
            setGoal(specificGoal)
        }
    }, [isModalOpen])

    function convertStringsToNumbers(object, propsToConvert) {
        for (let prop in object) {
            if (propsToConvert.includes(prop)) {
                object[prop] = Number(object[prop])
            }
        }
    }

    const labelToFieldMap = {
        'Avg Sleep Hours': 'sleep_duration',
        'Avg Sleep Quality': 'quality_of_sleep',
        'Physical Activity Level': 'physical_activity_level',
        'Stress Level': 'stress_level',
        'Daily Steps': 'daily_steps',
    }

    const handleGoalChange = (newGoal) => {
        setGoal(newGoal)
    }

    const handleGoalSubmit = async (newGoal) => {
        const abortController = new AbortController()

        try {
            const updatedGoals = {
                ...allGoals,
                [labelToFieldMap[label]]: newGoal, // Update only the specified goal
            }

            await updateGoals(userId, updatedGoals, abortController.signal)
        } catch (error) {
            setError(error)
        } finally {
            loadData()
            setIsModalOpen(false)
            abortController.abort()
        }
    }

    const handleEntryChange = (e) => {
        const { name, value } = e.target
        setEntry({
            ...entry,
            [name]: value,
        })
    }

    const handleEntrySubmit = async (e) => {
        e.preventDefault()
        const abortController = new AbortController()

        convertStringsToNumbers(entry, [
            'sleep_duration',
            'daily_steps',
            'stress_level',
            'heart_rate',
        ])

        try {
            await createEntry(entry, abortController.signal)
        } catch (error) {
            setError(error)
        } finally {
            // Refresh entries list and recalculate averages
            loadData()

            setIsModalOpen(false)
            abortController.abort()
        }
    }

    const handleEmployeeChange = (e) => {
        const { name, value } = e.target
        let valueCopy = value
        if (name === 'admin') {
            valueCopy = value === 'true'
        }
        setEmployee({
            ...employee,
            [name]: valueCopy,
        })
    }

    const handleEmployeeSubmit = async (e) => {
        e.preventDefault()
        const abortController = new AbortController()
        employee.age = Number(employee.age)

        try {
            if (isModalOpen.option === 'newEmployee') {
                await createUser(employee, abortController.signal)
            }

            if (isModalOpen.option === 'editEmployee') {
                await updateUser(
                    employee.person_id,
                    employee,
                    abortController.signal
                )
            }
        } catch (error) {
            setError(error)
        } finally {
            // Refresh employees list
            const listUsersResponse = await listUsers(abortController.signal)
            setEmployees(listUsersResponse)

            setIsModalOpen(false)
            abortController.abort()
        }
    }

    const closeModal = () => {
        setIsModalOpen(false)
    }

    function whichFormToUse(option) {
        switch (option) {
            case 'activity':
                return {
                    title: 'Log New Activity',
                    form: (
                        <ActivityLogForm
                            entry={entry}
                            handleChange={handleEntryChange}
                            handleSubmit={handleEntrySubmit}
                            error={error}
                        />
                    ),
                }
            case 'newEmployee':
                return {
                    title: 'Add New Employee',
                    form: (
                        <AddNewEmployeeForm
                            employee={employee}
                            handleChange={handleEmployeeChange}
                            handleSubmit={handleEmployeeSubmit}
                            error={error}
                        />
                    ),
                }
            case 'editEmployee':
                return {
                    title: `Edit Employee: ${employee.username}`,
                    form: (
                        <EditEmployeeForm
                            employee={employee}
                            handleChange={handleEmployeeChange}
                            handleSubmit={handleEmployeeSubmit}
                            error={error}
                        />
                    ),
                }
            case 'editGoal':
                return {
                    title: 'Edit Goal',
                    form: (
                        <EditGoal
                            goal={goal}
                            label={label}
                            handleChange={handleGoalChange}
                            handleSubmit={handleGoalSubmit}
                            error={error}
                        />
                    ),
                }
            default:
                console.error(`Modal option '${option}' is not valid`)
        }
    }

    return (
        <>
            <div
                id="crud-modal"
                tabIndex="-1"
                aria-hidden="true"
                className="fixed top-0 left-0 right-0 bottom-0 flex items-center justify-center bg-black bg-opacity-50 z-50"
            >
                <div className="relative w-full max-w-4xl max-h-full">
                    <div className="relative bg-white rounded-lg shadow dark:bg-gray-700">
                        <div className="flex items-center justify-between p-4 md:p-5 border-b rounded-t dark:border-gray-600">
                            <div className="flex-grow"></div>{' '}
                            <h3 className="text-2xl font-semibold text-gray-900 dark:text-white">
                                {whichFormToUse(isModalOpen.option).title}
                            </h3>
                            <div className="flex-grow flex justify-end">
                                <button
                                    type="button"
                                    className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white"
                                    onClick={closeModal}
                                >
                                    <svg
                                        className="w-3 h-3"
                                        aria-hidden="true"
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="none"
                                        viewBox="0 0 14 14"
                                    >
                                        <path
                                            stroke="currentColor"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth="2"
                                            d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
                                        />
                                    </svg>
                                    <span className="sr-only">Close modal</span>
                                </button>
                            </div>
                        </div>

                        <div className="p-4 md:p-5">
                            {whichFormToUse(isModalOpen.option).form}
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
