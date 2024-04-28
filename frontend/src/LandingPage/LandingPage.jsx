import React from 'react'
import { Link } from 'react-router-dom'
import '../index.css'
import IntroBlock from './IntroBlock'
import FeaturesBlock from './FeaturesBlock'
import CallToActionBlock from './CallToActionBlock'

export default function LandingPage() {
    return (
        <div className="flex flex-col items-center lg:px-10">
            <h1 className="lg:text-4xl text-3xl text-center font-extrabold tracking-tight my-12 lg:py-12 lg:w-4/5 lg:bg-white lg:rounded-xl">
                Welcome to Workplace Wellness
            </h1>
            <IntroBlock />
            <h2 className="lg:text-4xl text-3xl text-center font-extrabold tracking-tight mt-12 lg:py-12 lg:w-4/5 lg:bg-white lg:rounded-t-xl">
                What We Offer
            </h2>
            <FeaturesBlock />
            <CallToActionBlock />
        </div>
    )
}
