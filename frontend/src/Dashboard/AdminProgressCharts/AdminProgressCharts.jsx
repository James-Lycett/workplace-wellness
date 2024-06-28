import React from 'react'
import RadialBar from './RadialBar'
import { Progress } from 'flowbite-react'
import { Link } from 'react-router-dom'

export default function AdminProgressCharts({
    companyMetrics,
    goals,
    openModal,
}) {
    const providedGoals = {
        sleepHoursGoal: 1200,
        tasksMet: 80,
        tasksGoal: 128,
        companyMood: 'Decent',
        sleepQualityGoal: 8,
    }

    function calculateSleepHoursProgress() {
        const progressValue =
            (companyMetrics.sleep_duration_total /
                providedGoals.sleepHoursGoal) *
            100
        const boundedProgressValue = Math.min(Math.max(progressValue, 0), 100)

        return Math.floor(boundedProgressValue)
    }

    function calculateSleepQualityProgress() {
        const progressValue =
            (companyMetrics.quality_of_sleep_average /
                providedGoals.sleepQualityGoal) *
            100
        const boundedProgressValue = Math.min(Math.max(progressValue, 0), 100)
        return Math.floor(boundedProgressValue)
    }


    return (
        <>
            <div className="flex flex-col justify-center bg-white w-full max-w-5xl mx-auto rounded-md shadow-md">
                <h2 className="text-v2-drkblue font-semibold self-center mt-5">
                    Department Goals
                </h2>
                <Progress
                    progress={70}
                    color="blue"
                    progressLabelPosition="inside"
                    className="mt-10 mb-5 w-3/4 max-w-4xl mx-auto"
                    size="xl"
                    labelProgress
                />
            </div>
            <div className="flex flex-row justify-between my-5 mx-auto max-w-5xl font-light">
                <div className="flex flex-col justify-center bg-white me-5 rounded-lg shadow-md w-full md:w-1/3 aspect-square">
                    <RadialBar
                        series={[calculateSleepHoursProgress()]}
                        colors={['#7AEB7F']}
                        label="Avg Sleep Hours"
                    />
                    <hr />
                    <Link
                        onClick={() =>
                            openModal(
                                'editGoal',
                                null,
                                'Avg Sleep Hours',
                                goals
                            )
                        }
                        className="flex justify-end my-1 me-5 hover:text-blue-500 dark:hover:text-blue-400"
                    >
                        <p>Edit Goal</p>
                    </Link>
                </div>
                <div className="flex flex-col justify-center bg-white mx-10 rounded-lg shadow-md w-full md:w-1/3 aspect-square">
                    <RadialBar
                        series={[calculateSleepQualityProgress()]}
                        colors={['#EB897A']}
                        label="Avg Sleep Quality"
                    />
                    <hr />
                    <Link
                        onClick={() =>
                            openModal(
                                'editGoal',
                                null,
                                'Avg Sleep Quality',
                                goals
                            )
                        }
                        className="flex justify-end my-1 me-5 hover:text-blue-500 dark:hover:text-blue-400"
                    >
                        <p>Edit Goal</p>
                    </Link>
                </div>
                <div className="flex flex-col justify-center bg-white ms-5 rounded-lg shadow-md w-full md:w-1/3 aspect-square">
                    <RadialBar
                        series={[45]}
                        colors={['#E8EA8B']}
                        label="Tasks Completed"
                    />
                    <hr />
                    <Link
                        onClick={() => openModal('editGoal')}
                        className="flex justify-end my-1 me-5 hover:text-blue-500 dark:hover:text-blue-400"
                    >
                        <p>Edit Goal</p>
                    </Link>
                </div>
            </div>
        </>
    )
}
