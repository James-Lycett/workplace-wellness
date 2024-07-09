import React, { useState, useEffect, useCallback } from 'react'
import RadialBar from '../AdminProgressCharts/RadialBar'
import Spinner from '../../utils/Spinner'
import useIsMobile from '../AdminProgressCharts/useIsMobile'

export default function UserProgressCharts({ averages, goals }) {
    const [progress, setProgress] = useState({
        sleep_hours: 0,
        stress_level: 0,
        daily_steps: 0,
    })
    const isMobile = useIsMobile()

    const calculateProgress = useCallback(
        (option) => {
            const {
                sleep_duration_average,
                stress_level_average,
                daily_steps_average,
            } = averages
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
        [goals, averages]
    )

    useEffect(() => {
        const calculatedProgress = {
            sleep_hours: calculateProgress('sleep_hours'),
            stress_level: calculateProgress('stress_level'),
            daily_steps: calculateProgress('daily_steps'),
        }

        setProgress(calculatedProgress)
    }, [calculateProgress])

    const renderRadialBarOrAlternative = (label, progressKey, color) => {
        if (isMobile === null) {
            return <Spinner />
        }
        return !isMobile ? (
            <RadialBar
                series={[progress[progressKey]]}
                colors={[color]}
                label={label}
            />
        ) : (
            <div className="flex flex-col items-center justify-center h-full">
                <h3 className='text-reg sm:text-xl custom-heading'>{label}</h3>
                <p  className="font-bold text-xl sm:text-3xl mt-2">{progress[progressKey]}%</p>
            </div>
        )
    }

    if (averages.loaded) {
        return (
            <>
                <div className="flex flex-row justify-between my-5 mx-3 md:mx-auto max-w-5xl font-light">
                    <div className="flex flex-col justify-center bg-white me-5 rounded-lg shadow-md w-full md:w-1/3 aspect-square">
                        {renderRadialBarOrAlternative(
                            'Sleep Hours',
                            'sleep_hours',
                            '#7AEB7F'
                        )}
                    </div>
                    <div className="flex flex-col justify-center bg-white mx-0 md:mx-10 rounded-lg shadow-md w-full md:w-1/3 aspect-square">
                        {renderRadialBarOrAlternative(
                            'Stress Level',
                            'stress_level',
                            '#EB897A'
                        )}
                    </div>
                    <div className="flex flex-col justify-center bg-white ms-5 rounded-lg shadow-md w-full md:w-1/3 aspect-square">
                        {renderRadialBarOrAlternative(
                            'Daily Steps',
                            'daily_steps',
                            '#E8EA8B'
                        )}
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
