import React, { useState, useContext } from 'react'
import { updateGoals } from '../../utils/api'
import { GoalContext, LoadDataContext } from '../../utils/contexts'

export default function EditGoal({ setIsModalOpen }) {
    const { loadData, userId } = useContext(LoadDataContext)
    const { goals, whichGoalToEdit } = useContext(GoalContext)
    const [goal, setGoal] = useState(goals[whichGoalToEdit])
    const [error, setError] = useState(null)


    const handleChange = (e) => {
        const { value } = e.target
        setGoal(value)
    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        const abortController = new AbortController()

        try {
            const updatedGoals = {
                ...goals,
                [whichGoalToEdit]: goal
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

    return (
        <form onSubmit={handleSubmit}>
            <div className="flex flex-col items-center">
                <label className="mb-2 text-lg font-medium">{whichGoalToEdit}</label>
                <div className="flex items-center justify-between mb-4">
                    <input
                        type="number"
                        step={whichGoalToEdit === "daily_steps" ? 1000 : 1}
                        name={whichGoalToEdit}
                        value={goal}
                        onChange={handleChange}
                        className="w-24 text-center border-b-2 border-gray-300 focus:outline-none"
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
