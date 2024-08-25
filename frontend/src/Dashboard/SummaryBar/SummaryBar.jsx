import React, { useCallback } from 'react'
import profilePic1 from '../../images/profile1.png'
import profilePic2 from '../../images/profile2.png'
import profilePic3 from '../../images/profile3.png'
import moment from 'moment'

export default function SummaryBar({ user, averages, goals, view }) {
    const date = moment().format('dddd, MMMM Do')
    let profilePic
    switch (user.userId) {
        case 1:
            profilePic = profilePic1
            break
        case 2:
            profilePic = profilePic2
            break
        case 3:
            profilePic = profilePic3
            break
        default:
            profilePic = profilePic1
    }

    const calculatePercentOfDeptGoals = useCallback(() => {
        const {
            sleep_duration_average,
            stress_level_average,
            daily_steps_average,
        } = averages
        const { sleep_duration, stress_level, daily_steps } = goals

        const sleepProgress = (sleep_duration_average / sleep_duration) * 100
        const stressProgress =
            ((10 - stress_level_average) / (10 - stress_level)) * 100
        const stepsProgress = (daily_steps_average / daily_steps) * 100

        const combinedProgress =
            (sleepProgress + stressProgress + stepsProgress) / 3

        const boundedProgressValue = Math.min(
            Math.max(combinedProgress, 0),
            100
        )

        return Math.floor(boundedProgressValue)
    })

    return (
        <>
            <div className="flex flex-row md:flex-col bg-white rounded-lg shadow-md md:h-56 my-5 mx-3 md:mx-auto md:mb-10 max-w-5xl">
                <div className="flex flex-row justify-between">
                    <div className="flex flex-col md:flex-row w-1/2 md:w-full md:self-center p-2.5">
                        <img
                            src={profilePic}
                            className="rounded-full object-contain self-center size-24"
                        />
                        <div className="flex flex-col justify-center font-semibold text-sm p-3 md:text-xl">
                            <h2>{user.username}</h2>
                            <h3 className="text-v2-drkblue">
                                {user.occupation}
                            </h3>
                        </div>
                    </div>
                    <div className="pt-8 me-8 w-1/4 text-right">
                        <p className="font-semibold text-reg mb-3">
                            {view === 'admin' ? 'ADMIN' : 'DASHBOARD'}
                        </p>
                        <p className="text-reg">{date}</p>
                    </div>
                </div>
                <div className="flex flex-col py-5 px-3 sm:px-8 md:p-0 md:mx-5 md:flex-row items-center justify-between gap-5 md:gap-6 w-100% md:h-24">
                    <div className="flex items-center justify-center bg-white w-full rounded-3xl shadow-inset-lg h-20">
                        <p className="text-sm md:text-base">
                            Monthly Goals Met:{' '}
                            <span className="font-semibold ps-2 md:text-2xl">
                                3/6
                            </span>
                        </p>
                    </div>
                    <div className="flex items-center justify-center bg-white w-full rounded-3xl shadow-inset-lg h-20">
                        <p className="text-sm md:text-base">
                            % of Dept Goals:{' '}
                            <span className="font-semibold ps-2 md:text-2xl">
                                {calculatePercentOfDeptGoals()}%
                            </span>
                        </p>
                    </div>
                    <div className="flex flex-row items-center bg-white w-full rounded-3xl shadow-inset-lg h-20">
                        <p className="text-sm md:text-base w-1/2 ps-5">
                            Longest Goal Streak:{' '}
                        </p>
                        <div className="font-semibold md:text-xl w-1/2">
                            <p>Daily Steps</p>
                            <p>(3 months)</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
