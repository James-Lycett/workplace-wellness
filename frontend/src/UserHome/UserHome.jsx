import React, { useState, useCallback, useEffect } from 'react'
import { Link, useParams } from 'react-router-dom'
import DropDownMenuButton from '../utils/DropDownMenuButton'
import { readUserById } from '../utils/api'
import Spinner from '../utils/Spinner'
import CircularProgressBar from '../utils/ProgressCircle'
import { initDropdowns } from 'flowbite'

export default function UserHome() {
    const { userId } = useParams()
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

    // Fetches user from the API
    const loadUser = useCallback(async () => {
        const abortController = new AbortController()

        try {
            const response = await readUserById(userId, abortController.signal)
            setUser(response)
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
                            <h3>Sleep Duration: 8 hours per day</h3>
                            <h3>BMI 18.5 to 24.9</h3>
                            <h3>Steps: 6,000 to 8,000 steps per day</h3>
                            <h3>Stress Levels: Below 5</h3>
                            <h3>Heart Rate: Below 70</h3>
                        </div>
                    </div>
                </div>
                <div className="bg-accent-background border-accent-1 border-2 rounded-md mx-6 mt-6">
                    <div className="flex relative justify-center px-3 pt-3">
                        <h2 className="text-2xl">Last Month Metrics</h2>
                        <div className="absolute right-5 mt-1.5">
                            <DropDownMenuButton options={menuOptions} />
                        </div>
                    </div>
                    <hr className="h-px border-0 bg-black" />
                    <div className="grid grid-cols-2 gap-4 p-3 mt-1">
                        <div className="flex flex-col text-center items-center border-2 border-black p-1 pb-4">
                            <h2 className="text-xl">Sleep Duration</h2>
                            <p>Your Average: 6 Hours/Day</p>
                            <CircularProgressBar progress={75} />
                        </div>
                        <div className="flex flex-col text-center items-center border-2 border-black p-1 pb-4">
                            <h2 className="text-xl">BMI</h2>
                            <p>Category: Overweight</p>
                            <CircularProgressBar progress={29} />
                        </div>
                        <div className="flex flex-col text-center items-center border-2 border-black p-1 pb-4">
                            <h2 className="text-xl">Steps</h2>
                            <p>Your Average: 5300 Steps/Day</p>
                            <CircularProgressBar progress={88} />
                        </div>
                        <div className="flex flex-col text-center items-center border-2 border-black p-1 pb-4">
                            <h2 className="text-xl">Stress Levels</h2>
                            <p>Your Average: 7/10</p>
                            <CircularProgressBar progress={70} />
                        </div>
                    </div>
                    <p className="ms-3 pb-10">
                        Your Average Heart Rate: 87 bpm (Above Average)
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
