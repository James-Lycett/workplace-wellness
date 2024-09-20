import React, { useEffect } from 'react'
import '../index.css'
import IntroBlock from './IntroBlock'
import FeaturesBlock from './FeaturesBlock'
import CallToActionBlock from './CallToActionBlock'
import TutorialBlock from './TutorialBlock'
import { useLocation } from 'react-router-dom'

export default function LandingPage() {
    const location = useLocation()

    useEffect(() => {
        if (location.state && location.state.sectionId) {
            const section = document.querySelector(
                `#${location.state.sectionId}`
            )
            if (section) {
                section.scrollIntoView({ behavior: 'smooth', block: 'start' })
            }
        }
    }, [location])

    return (
        <div className="flex flex-col items-center lg:px-10">
            <h1 className="lg:text-4xl text-3xl text-center font-extrabold tracking-tight my-12 lg:py-12 lg:w-4/5">
                Welcome to Workplace Wellness
            </h1>
            <IntroBlock />
            <h2 className="lg:text-4xl text-3xl text-center font-extrabold tracking-tight mt-12 lg:py-12 lg:w-4/5">
                What We Offer
            </h2>
            <FeaturesBlock />
            <CallToActionBlock />
            <hr />
            <TutorialBlock />
        </div>
    )
}
