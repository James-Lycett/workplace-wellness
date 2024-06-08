import React from 'react'
import RadialBar from '../AdminProgressCharts/RadialBar'
import { Progress } from 'flowbite-react'
import Spinner from '../../utils/Spinner'

export default function UserProgressCharts({ averages }) {
    // Placeholder admin goals data:
    const goals = {
        // sleepHoursThisMonth: 1545, now getting this straight from the db, see "companyMetrics"
        sleepHoursGoal: 8,
        tasksMet: 80,
        tasksGoal: 128,
        companyMood: 'Decent',
        sleepQualityGoal: 8,
    }

    function calculateSleepHoursProgress() {
        const progressValue =
            (averages.sleep_duration_average / goals.sleepHoursGoal) * 100
        const boundedProgressValue = Math.min(Math.max(progressValue, 0), 100)

        return Math.floor(boundedProgressValue) // Return the progress value
    }

    function calculateSleepQualityProgress() {
        const progressValue =
            (averages.quality_of_sleep_average / goals.sleepQualityGoal) * 100
        const boundedProgressValue = Math.min(Math.max(progressValue, 0), 100)
        return Math.floor(boundedProgressValue)
    }

    if (averages.loaded) {
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
                    </div>
                    <div className="flex flex-col justify-center bg-white mx-10 rounded-lg shadow-md w-full md:w-1/3 aspect-square">
                        <RadialBar
                            series={[calculateSleepQualityProgress()]}
                            colors={['#EB897A']}
                            label="Avg Sleep Quality"
                        />
                    </div>
                    <div className="flex flex-col justify-center bg-white ms-5 rounded-lg shadow-md w-full md:w-1/3 aspect-square">
                        <RadialBar
                            series={[45]}
                            colors={['#E8EA8B']}
                            label="Tasks Completed"
                        />
                    </div>
                </div>
            </>
        )
    } else {
        return (
            <div className="py-20">
                <Spinner />
            </div>
        )
    }
}
