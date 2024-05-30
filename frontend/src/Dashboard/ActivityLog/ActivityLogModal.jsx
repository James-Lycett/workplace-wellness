import React, { useState } from "react";
import ActivityLogForm from "./ActivityLogForm";

export default function ActivityLogModal({ setIsModalOpen }) {

    const [entry, setEntry] = useState({
        sleep_duration: '',
        bmi_category: 'Normal',
        daily_steps: '',
        stress_level: '',
        heart_rate: '',
    })

    const handleChange = (e) => {
        const { name, value } = e.target
        setEntry({
            ...entry,
            [name]: value,
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        // Handle form submission logic
        console.log('Form submitted', entry)
        // Close modal after submission
        setIsModalOpen(false)
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
                                Log New Activity
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
                            <ActivityLogForm
                                entry={entry}
                                handleChange={handleChange}
                                handleSubmit={handleSubmit}
                            />
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}