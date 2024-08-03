import React from "react";
import profilePic1 from "../AdminEmployeesTable/images/1.png"
import profilePic2 from "../AdminEmployeesTable/images/2.png"
import profilePic3 from "../AdminEmployeesTable/images/3.png"

export default function SummaryBar({ user, averages }) {
    let profilePic
    switch (user.userId) {
        case 1 :
            profilePic = profilePic1
            break
        case 2 :
            profilePic = profilePic2
            break
        case 3 :
            profilePic = profilePic3
            break
        default : 
        profilePic = profilePic1
    }

    return (
        <>
                <div className="flex flex-col bg-white rounded-lg shadow-md md:h-44 my-5 mx-3 md:mx-auto max-w-5xl">
                    <div className="flex flex-row w-full md:h-28 p-2.5">
                        <img src={profilePic} className="rounded-full md:size-24"/>
                        <div className="flex flex-col justify-center font-semibold text-xl">
                            <h2>{user.username}</h2>
                            <h3 className="text-v2-drkblue">{user.occupation}</h3>
                        </div>
                    </div>
                    <div className="flex flex-row items-center justify-between gap-16 w-full px-2.5 md:h-24">
                        <div className="flex items-center justify-center bg-white w-full rounded-full shadow-md h-9">
                            <h3>Average Sleep Hours: <span className="font-semibold ps-2 text-lg">{Math.round(averages.sleep_duration_average)}</span></h3>
                        </div>
                        <div className="flex items-center justify-center bg-white w-full rounded-full shadow-md h-9">
                            <h3>Average Stress Level: <span className="font-semibold ps-2 text-lg">{Math.round(averages.stress_level_average)}</span></h3>
                        </div>
                        <div className="flex items-center justify-center bg-white w-full rounded-full shadow-md h-9">
                            <h3>Average Daily Steps: <span className="font-semibold ps-2 text-lg">{Math.round(averages.daily_steps_average)}</span></h3>
                        </div>
                    </div>
                </div>
            </>
    )
}