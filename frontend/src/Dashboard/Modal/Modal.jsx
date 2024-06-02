import React, { useState } from "react";
import ActivityLogForm from "./ActivityLogForm";
import AddNewEmployeeForm from "./AddNewEmployeeForm";
import { createUser } from "../../utils/api"

export default function Modal({ setIsModalOpen, option, setEmployees }) {

    const [entry, setEntry] = useState({
        sleep_duration: '',
        bmi_category: 'Normal',
        daily_steps: '',
        stress_level: '',
        heart_rate: '',
    })

    const handleEntryChange = (e) => {
        const { name, value } = e.target
        setEntry({
            ...entry,
            [name]: value,
        })
    }

    const handleEntrySubmit = (e) => {
        e.preventDefault()
        // Handle form submission logic
        console.log('Form submitted', entry)
        // Close modal after submission
        setIsModalOpen(false)
    }


    const [employee, setEmployee] = useState({
        username: "",
        age: "",
        gender: "",
        sleep_disorder: "",
        occupation: "",
    })

    const handleEmployeeChange = (e) => {
        const { name, value } = e.target
        setEmployee({
            ...employee,
            [name]: value,
        })
    }

    const handleEmployeeSubmit = async (e) => {
        e.preventDefault()
        const abortController = new AbortController
        employee.age = Number(employee.age)

        try {
            await createUser(employee, abortController.signal)
        } catch (error) {
            console.error(error)
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
                            <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                                {option === "activity" ? "Log New Activity" : "Add New Employee"}
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
                                    <span className="sr-only">
                                        Close modal
                                    </span>
                                </button>
                            </div>
                        </div>

                        <div className="p-4 md:p-5">
                            {option === "activity" ? (
                                <ActivityLogForm
                                    entry={entry}
                                    handleChange={handleEntryChange}
                                    handleSubmit={handleEntrySubmit}
                                />
                                ) : (
                                    <AddNewEmployeeForm 
                                        employee={employee}
                                        handleChange={handleEmployeeChange}
                                        handleSubmit={handleEmployeeSubmit}
                                    />
                                )
                            }
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}