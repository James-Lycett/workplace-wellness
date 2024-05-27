import React, { useState } from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom'
import DropDownMenuButton from '../utils/DropDownMenuButton'
import ActivityLogForm from './ActivityLogForm'
import SuggestionCard from './SuggestionCard'
import { createEntry } from '../utils/api'

export default function UserActivityLog() {
    const { userId } = useParams()

    // Options to pass down to <DropDownMenuButton/>
    const menuOptions = [
        {
            option: 'Home',
            route: '/',
        },
        {
            option: 'Dashboard',
            route: `/user/${userId}/home`,
        },
        {
            option: 'Report History',
            route: `/user/${userId}/history`,
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
    const suggestions = [
        {
            title: 'Sleep Disorders Guide',
            tip: 'Explore educational resources for common sleep disorders. Including self help modules or be connected with a sleep specialist. Establish your own sleep routine.',
            link: '/tips/sleep',
        },
        {
            title: 'Physical Fitness Guide',
            tip: 'Navigate a variety of workout plans, engaging activities, or find local trails. Learn the importance of physical activity for your personal better mental well-being.',
            link: '/tips/fitness',
        },
        {
            title: 'Meditation & Relaxation Guide',
            tip: 'Learn meditation and deep relaxation techniques to better your sleep quality and lower your daily stress levels. Personalized mood tracking to discover your stress triggers.',
            link: '/tips/meditation',
        },
        {
            title: 'Link Audio Books',
            tip: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
        },
    ]
    const date = new Date().toISOString()
    const navigate = useNavigate() // Initialize useHistory hook

    const [entry, setEntry] = useState({
        person_id: userId,
        sleep_duration: 0,
        bmi_category: 'Normal',
        daily_steps: 0,
        stress_level: 0,
        heart_rate: 0,
        date: date,
    })

    // Adds form data to appropriate entry property as the user types in the field
    function handleChange({ target: { name, value } }) {
        setEntry((previousEntry) => ({
            ...previousEntry,
            [name]: name === 'bmi_category' ? value : parseFloat(value),
        }))
    }

    // Creates a new entry with today"s date
    const handleSubmit = async (e) => {
        e.preventDefault()

        const abortController = new AbortController()
        console.log(entry)
        try {
            await createEntry(entry, abortController.signal)
        } catch (er) {
            console.error(er)
        } finally {
            abortController.abort()
            navigate(`/user/${userId}/history`)
        }
    }

    return (
        <div className="mx-20">
            <div className="break-after-column m-6">
                <div className="flex flex-col items-center">
                    <h2 className="text-3xl font-bold">Today's Activity</h2>
                </div>
                <div className="mt-6">
                    <ActivityLogForm
                        entry={entry}
                        handleChange={handleChange}
                        handleSubmit={handleSubmit}
                    />
                </div>
            </div>
            {/* <div className="bg-accent-background border-accent-1 border-2 rounded-md m-6"> */}
            {/* <div className="flex relative justify-center px-3">
                <h2 className="text-3xl">Sleep Quality Guides</h2>
                <div className="absolute right-5 mt-2">
                    <DropDownMenuButton options={menuOptions} />
                </div>
            </div>
            <hr className="h-px border-0 bg-black" />
            <div className="px-3">
                <SuggestionCard suggestion={suggestions[0]} />
                <SuggestionCard suggestion={suggestions[1]} />
                <SuggestionCard suggestion={suggestions[2]} />
            </div> */}
            {/* </div> */}
        </div>
    )
}
