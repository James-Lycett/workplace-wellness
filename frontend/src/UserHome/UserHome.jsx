import React, { useState, useCallback, useEffect } from 'react'
import { Link, useParams } from 'react-router-dom'
import DropDownMenuButton from '../utils/DropDownMenuButton'
import { readUserById, readAveragesById } from '../utils/api'
import Spinner from '../utils/Spinner'
import CircularProgressBar from '../utils/ProgressCircle'
import { initDropdowns } from 'flowbite'

export default function UserHome() {
    const { userId } = useParams()

    // Placeholder 'Recommended Daily Goals'
    const dailyGoals = {
        sleep: 8,
        bmi: 21.7,
        steps: 8000,
        stress: 5,
        heartRate: 70,
    }
    // Options to pass down to <DropDownMenuButton/>
    const menuOptions = [
        {
            option: 'Home',
            route: '/',
        },
        {
            option: 'Report History',
            route: `/user/${userId}/history`,
        },
        {
            option: 'Log Activity',
            route: `/user/${userId}/log`,
        },
        {
            option: 'Terms',
            route: '/bp/terms',
        },
        {
            option: 'Privacy Policy',
            route: '/bp/privacy',
        },
    ]

    const [user, setUser] = useState(null)
    const [averages, setAverages] = useState({
        sleep_duration_average: 0,
        daily_steps_average: 0,
        stress_level_average: 0,
        heart_rate_average: 0,
        bmi_category_average: "N/A"
    })

    // Fetches user from the API
    const loadUser = useCallback(async () => {
        const abortController = new AbortController()

        try {
            const readUserResponse = await readUserById(userId, abortController.signal)
            const readAveragesResponse = await readAveragesById(userId, abortController.signal)
            console.log(readAveragesResponse)
            setAverages(readAveragesResponse)
            setUser(readUserResponse)
        } catch (error) {
            console.error(error)
        } finally {
            abortController.abort()
        }
    }, [userId])

    useEffect(() => {
        loadUser()
        initDropdowns()
    }, [loadUser, userId])

    function percentProgressCalculator(average, goal) {
        return Math.round((100 * (average / goal)))
    }

    function stressLevelProgressCalculator(average, goal) {
        if (averages.heart_rate_average === 0) {
            return 0
        } else if (average <= goal) {
            return 100
        } else {
            const goalInverseProportionOfMax = (10 - goal)
            const averageInverseProportionOfMax = (10 - average)

            return (100 * (averageInverseProportionOfMax / goalInverseProportionOfMax))
        }
    }

    if (user) {
        return (
            <div className="columns-2">
                <div className="break-after-column m-6">
                    <div className="pt-2">
                        <h1 className="text-3xl font-bold">
                            Welcome {user.username}!
                        </h1>
                        <hr className="h-px border-0 bg-black" />
                        <p className="my-4">
                            Workplace Wellness is a website designed to support
                            individuals in achieving better sleep and overall
                            well-being. Our platform combines evidence-based
                            information and interactive tools to empower users
                            on their sleep journey.
                        </p>
                    </div>
                    <div className="flex flex-col pb-5">
                        <Link
                            to={`/user/${userId}/log`}
                            className="w-5/12 button-white-rounded my-2"
                            reloadDocument
                        >
                            LOG ACTIVITY
                        </Link>
                        <Link
                            to={`/user/${userId}/history`}
                            className="w-5/12 button-dark-rounded my-2"
                            reloadDocument
                        >
                            PAST REPORTS
                        </Link>
                    </div>
                    <div className="mt-5">
                        <h2 className="font-bold text-4xl">
                            Recommended Daily Goals
                        </h2>
                        <div className="text-lg mt-2">
                            <h3>Sleep Duration: {dailyGoals.sleep} hours per day</h3>
                            <h3>BMI: {dailyGoals.bmi}</h3>
                            <h3>Steps: {dailyGoals.steps} steps per day</h3>
                            <h3>Stress Levels: Below {dailyGoals.stress}</h3>
                            <h3>Heart Rate: Below {dailyGoals.heartRate}</h3>
                        </div>
                    </div>
                </div>
                <div className="bg-accent-background border-accent-1 border-2 rounded-md mx-6 mt-6">
                    <div className="flex relative justify-center px-3 pt-3">
                        <h2 className="text-2xl">{averages.heart_rate_average === 0 ? "No Activity Logged This Month" : "Last Month Metrics"}</h2>
                        <div className="absolute right-5 mt-1.5">
                            <DropDownMenuButton options={menuOptions} />
                        </div>
                    </div>
                    <hr className="h-px border-0 bg-black" />
                    <div className="grid grid-cols-2 gap-4 p-3 mt-1">
                        <div className="flex flex-col text-center items-center border-2 border-black p-1 pb-4">
                            <h2 className="text-xl">Sleep Duration</h2>
                            <p>Your Average: {averages.sleep_duration_average} Hours/Day</p>
                            <CircularProgressBar progress={percentProgressCalculator(averages.sleep_duration_average, dailyGoals.sleep)} />
                        </div>
                        <div className="flex flex-col text-center items-center border-2 border-black p-1 pb-4">
                            <h2 className="text-xl">BMI</h2>
                            <p>Category: {averages.bmi_category_average}</p>
                            <h3 className="text-lg font-bold mt-9">{averages.bmi_category_average === "Normal" ? "Great Work!" : "Keep At It!"}</h3>
                            {/*<CircularProgressBar progress={29} />*/}
                        </div>
                        <div className="flex flex-col text-center items-center border-2 border-black p-1 pb-4">
                            <h2 className="text-xl">Steps</h2>
                            <p>Your Average: {averages.daily_steps_average} Steps/Day</p>
                            <CircularProgressBar progress={percentProgressCalculator(averages.daily_steps_average, dailyGoals.steps)} />
                        </div>
                        <div className="flex flex-col text-center items-center border-2 border-black p-1 pb-4">
                            <h2 className="text-xl">Stress Levels</h2>
                            <p>Your Average: {averages.stress_level_average}/10</p>
                            <CircularProgressBar progress={stressLevelProgressCalculator(averages.stress_level_average, dailyGoals.stress)} />
                        </div>
                    </div>
                    <p className="ms-3 pb-10">
                        Your Average Heart Rate: {averages.heart_rate_average} bpm
                    </p>
                </div>
            </div>
        )
    } else {
        return (
            <div className=" my-32">
                <Spinner />
            </div>
        )
    }
}
