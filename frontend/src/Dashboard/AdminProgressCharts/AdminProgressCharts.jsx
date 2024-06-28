import React, { useCallback, useEffect, useState } from 'react'
import RadialBar from './RadialBar'
import { Progress } from 'flowbite-react'
import { Link } from 'react-router-dom'

export default function AdminProgressCharts({
    companyAverages,
    goals,
    openModal,
}) {
    const [progress, setProgress] = useState({
        sleep_hours: 0,
        stress_level: 0,
        daily_steps: 0,
    })

    const calculateProgress = useCallback(
        (option) => {
            const {
                sleep_duration_average,
                stress_level_average,
                daily_steps_average,
            } = companyAverages
            const { sleep_duration, stress_level, daily_steps } = goals

            let progressValue = 0

            switch (option) {
                case 'sleep_hours':
                    progressValue =
                        (sleep_duration_average / sleep_duration) * 100
                    break
                case 'stress_level':
                    progressValue = (stress_level_average / stress_level) * 100
                    break
                case 'daily_steps':
                    progressValue = (daily_steps_average / daily_steps) * 100
                    break
                default:
                    throw new Error(
                        `Invalid calculateProgress option: ${option}`
                    )
            }

            const boundedProgressValue = Math.min(
                Math.max(progressValue, 0),
                100
            )
            return Math.floor(boundedProgressValue)
        },
        [goals, companyAverages]
    )

    useEffect(() => {
        const calculatedProgress = {
            sleep_hours: calculateProgress('sleep_hours'),
            stress_level: calculateProgress('stress_level'),
            daily_steps: calculateProgress('daily_steps'),
        }

        setProgress(calculatedProgress)
    }, [calculateProgress])

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
                        series={[progress.sleep_hours]}
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
                        series={[progress.stress_level]}
                        colors={['#EB897A']}
                        label="Stress Level"
                    />
                    <hr />
                    <Link
                        onClick={() =>
                            openModal('editGoal', null, 'Stress Level', goals)
                        }
                        className="flex justify-end my-1 me-5 hover:text-blue-500 dark:hover:text-blue-400"
                    >
                        <p>Edit Goal</p>
                    </Link>
                </div>
                <div className="flex flex-col justify-center bg-white ms-5 rounded-lg shadow-md w-full md:w-1/3 aspect-square">
                    <RadialBar
                        series={[progress.daily_steps]}
                        colors={['#E8EA8B']}
                        label="Daily Steps"
                    />
                    <hr />
                    <Link
                        onClick={() =>
                            openModal('editGoal', null, 'Daily Steps', goals)
                        }
                        className="flex justify-end my-1 me-5 hover:text-blue-500 dark:hover:text-blue-400"
                    >
                        <p>Edit Goal</p>
                    </Link>
                </div>
            </div>
        </>
    )
}
