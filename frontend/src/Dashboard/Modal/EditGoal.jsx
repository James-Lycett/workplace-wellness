import React, { useState } from 'react'

export default function EditGoal({
    goal,
    label,
    handleChange,
    handleSubmit,
    error,
}) {
    return (
        <form onSubmit={handleSubmit}>
            <div className="flex flex-col items-center">
                <label className="mb-2 text-lg font-medium">{label}</label>
                <div className="flex items-center justify-between mb-4">
                    <input
                        type="number"
                        step={0.25}
                        value={goal}
                        onChange={handleChange}
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
