import React, { useState, useEffect } from 'react'

export default function EditGoal({
    goal,
    label,
    handleChange,
    handleSubmit,
    error,
}) {
    const [newGoal, setNewGoal] = useState(goal)

    //updated starting value of newGoal whenever goal is updated elsewhere
    useEffect(() => {
        setNewGoal(goal)
    }, [goal])

    const handleInputChange = (e) => {
        setNewGoal(Number(e.target.value))
        handleChange(Number(e.target.value))
    }

    const handleFormSubmit = (e) => {
        e.preventDefault()
        handleSubmit(newGoal)
    }

    return (
        <form onSubmit={handleFormSubmit}>
            <div className="flex flex-col items-center">
                <label className="mb-2 text-lg font-medium">{label}</label>
                <div className="flex items-center justify-between mb-4">
                    <input
                        type="number"
                        step={label === "Daily Steps" ? 100 : 0.5}
                        value={newGoal}
                        onChange={handleInputChange}
                        className="w-20 text-center border-b-2 border-gray-300 focus:outline-none"
                    />
                </div>
                {error && <p className="text-red-500">{error.message}</p>}
                <button
                    type="submit"
                    className="px-4 py-2 bg-blue-500 text-white rounded"
                >
                    Save
                </button>
            </div>
        </form>
    )
}
