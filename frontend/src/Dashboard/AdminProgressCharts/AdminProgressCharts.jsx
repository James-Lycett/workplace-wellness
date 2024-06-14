import React from 'react'
import RadialBar from './RadialBar'
import { Progress } from 'flowbite-react'

export default function AdminProgressCharts({ companyMetrics }) {
    const goals = {
        sleepHoursGoal: 1200,
        tasksMet: 80,
        tasksGoal: 128,
        companyMood: 'Decent',
        sleepQualityGoal: 8,
    }

    function calculateSleepHoursProgress() {
        const progressValue =
            (companyMetrics.sleep_duration_total / goals.sleepHoursGoal) * 100
        const boundedProgressValue = Math.min(Math.max(progressValue, 0), 100)

        return Math.floor(boundedProgressValue)
    }

    function calculateSleepQualityProgress() {
        const progressValue =
            (companyMetrics.quality_of_sleep_average / goals.sleepQualityGoal) *
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
                        labels={['Avg Sleep Hours']}
                    />
                </div>
                <div className="flex flex-col justify-center bg-white mx-10 rounded-lg shadow-md w-full md:w-1/3 aspect-square">
                    <RadialBar
                        series={[calculateSleepQualityProgress()]}
                        colors={['#EB897A']}
                        labels={['Avg Sleep Quality']}
                    />
                </div>
                <div className="flex flex-col justify-center bg-white ms-5 rounded-lg shadow-md w-full md:w-1/3 aspect-square">
                    <RadialBar
                        series={[45]}
                        colors={['#E8EA8B']}
                        labels={['Tasks Completed']}
                    />
                </div>
            </div>
        </>
    )
}
