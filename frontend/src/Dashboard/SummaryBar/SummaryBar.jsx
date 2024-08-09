import React from 'react'
import profilePic1 from '../AdminEmployeesTable/images/1.png'
import profilePic2 from '../AdminEmployeesTable/images/2.png'
import profilePic3 from '../AdminEmployeesTable/images/3.png'

export default function SummaryBar({ user, averages }) {
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

    return (
        <>
            <div className="flex flex-row md:flex-col bg-white rounded-lg shadow-md md:h-44 my-5 mx-3 md:mx-auto max-w-5xl">
                <div className="flex flex-col md:flex-row w-1/2 md:w-full md:self-center p-2.5">
                    <img
                        src={profilePic}
                        className="rounded-full object-contain self-center size-24"
                    />
                    <div className="flex flex-col justify-center font-semibold text-sm p-3 md:text-xl">
                        <h2>{user.username}</h2>
                        <h3 className="text-v2-drkblue">{user.occupation}</h3>
                    </div>
                </div>
                <div className="flex flex-col py-5 px-3 sm:px-8 md:p-0 md:flex-row items-center justify-between gap-5 md:gap-16 w-full px-2.5 md:h-24">
                    <div className="flex items-center justify-center bg-white w-full rounded-full shadow-md h-9">
                        <h3 className="text-sm md:text-lg">
                            Average Sleep Hours:{' '}
                            <span className="font-semibold ps-2 ">
                                {Math.round(averages.sleep_duration_average)}
                            </span>
                        </h3>
                    </div>
                    <div className="flex items-center justify-center bg-white w-full rounded-full shadow-md h-9">
                        <h3 className="text-sm md:text-lg">
                            Average Stress Level:{' '}
                            <span className="font-semibold ps-2">
                                {Math.round(averages.stress_level_average)}
                            </span>
                        </h3>
                    </div>
                    <div className="flex items-center justify-center bg-white w-full rounded-full shadow-md h-9">
                        <h3 className="text-sm md:text-lg">
                            Average Daily Steps:{' '}
                            <span className="font-semibold ps-2">
                                {Math.round(averages.daily_steps_average)}
                            </span>
                        </h3>
                    </div>
                </div>
            </div>
        </>
    )
}
