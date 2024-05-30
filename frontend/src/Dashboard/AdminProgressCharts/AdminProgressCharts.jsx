import React from 'react'
import RadialBar from './RadialBar'
import { Progress } from 'flowbite-react'

export default function AdminProgressCharts({ companyMetrics }) {
    // Placeholder admin goals data:
    const goals = {
        // sleepHoursThisMonth: 1545, now getting this straight from the db, see "companyMetrics"
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

        return Math.floor(boundedProgressValue) // Return the progress value
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
            <div className="flex flex-col mx-5 md:mx-auto justify-center bg-white w-full max-w-5xl rounded-md shadow-md p-5">
                <h2 className="text-v2-drkblue font-semibold self-center mt-5">
                    Department Goals
                </h2>
                <Progress
                    progress={70}
                    color="blue"
                    progressLabelPosition="inside"
                    className="mt-10 mb-5 w-3/4 lg:w-full mx-auto"
                    size="xl"
                    labelProgress
                />
            </div>
            <div className="flex flex-col justify-between items-stretch md:my-5 mx-auto max-w-5xl font-light md:flex-row">
                <div className="flex flex-col justify-center aspect-square bg-white mt-5 mx-auto rounded-lg shadow-md md:me-5 md:mt-0 md:mx-0">
                    <RadialBar
                        series={[calculateSleepHoursProgress()]}
                        labels={['Sleep Hours']}
                        height="100%"
                        width="100%"
                        colors={['#7AEB7F']}
                    />
                </div>
                <div className="flex flex-col justify-center aspect-square bg-white my-5 mx-auto rounded-lg shadow-md md:mx-10 md:my-0 md:mx-0">
                    <RadialBar
                        series={[calculateSleepQualityProgress()]}
                        labels={['Sleep Quality']}
                        height="100%"
                        width="100%"
                        colors={['#EB897A']}
                    />
                </div>
                <div className="flex flex-col justify-center aspect-square bg-white mx-auto rounded-lg shadow-md md:ms-5 md:mb-0 md:mx-0">
                    <RadialBar
                        series={[45]}
                        labels={['Tasks Completed']}
                        height="100%"
                        width="100%"
                        colors={['#E8EA8B']}
                    />
                </div>
            </div>
        </>
    )
}
