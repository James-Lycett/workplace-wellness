import React, { useState } from 'react'

export default function EditGoal({ goal, onSave, error }) {
    const [newGoal, setNewGoal] = useState(goal)

    const handleIncrement = () => {
        setNewGoal((prev) => prev + 1)
    }

    const handleDecrement = () => {
        setNewGoal((prev) => prev - 1)
    }

    const handleInputChange = (e) => {
        setNewGoal(Number(e.target.value))
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        onSave(newGoal)
    }

    return (
        <form onSubmit={handleSubmit}>
            <div className="flex flex-col items-center">
                <label className="mb-2 text-lg font-medium">Current Goal</label>
                <div className="flex items-center justify-between mb-4">
                    <button
                        type="button"
                        className="px-3 py-1 bg-gray-200 rounded"
                        onClick={handleDecrement}
                    >
                        -
                    </button>
                    <input
                        type="number"
                        value={newGoal}
                        onChange={handleInputChange}
                        className="w-20 text-center border-b-2 border-gray-300 focus:outline-none"
                    />
                    <button
                        type="button"
                        className="px-3 py-1 bg-gray-200 rounded"
                        onClick={handleIncrement}
                    >
                        +
                    </button>
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
