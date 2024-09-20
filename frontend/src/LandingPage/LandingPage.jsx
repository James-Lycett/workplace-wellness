import React from 'react'
import '../index.css'
import IntroBlock from './IntroBlock'
import FeaturesBlock from './FeaturesBlock'
import CallToActionBlock from './CallToActionBlock'
import screen1 from '../images/screen1.png'
import screen2 from '../images/screen2.png'
import screen3 from '../images/screen3.png'

export default function LandingPage() {
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
            <div>
                <h2 className="text-3xl text-center my-10">
                    How to Use Workplace Wellness
                </h2>
                <h3 className="text-2xl text-center my-10 border-bottom">
                    Logging In / Registering
                </h3>
                <div className="flex flex-col gap-5 mx-10 px-10">
                    <div className="flex gap-5 items-center">
                        <p>
                            To sign in simply click the "Get Started" button
                            above, or Sign in in the far right of the header
                            links. You will be directed to the sign in page
                            pictured here.
                        </p>
                        <img
                            src={screen1}
                            alt="screenshot of login page"
                            className="border border-v2-drkblue w-1/2"
                        />
                    </div>
                    <div className="flex gap-5 items-center">
                        <p>
                            Feel free to register a new account (we recommend
                            chosing admin to see all of the features WW has to
                            offer). But for now, we're going to sign in using
                            the demo credentials
                        </p>
                        <img
                            src={screen1}
                            alt="screenshot of login page"
                            className="border border-v2-drkblue w-1/2"
                        />
                    </div>
                    <div className="flex gap-5 items-center">
                        <p>
                            Click on the "Looking for a demo?" link to open a
                            pop-up with the Demo Credentials. We're going to
                            choose Admin so click "Fill-in Admin Login".
                        </p>
                        <img
                            src={screen2}
                            alt="screenshot of login page"
                            className="border border-v2-drkblue w-1/2"
                        />
                    </div>
                    <div className="flex gap-5 items-center">
                        <p>
                            To sign in simply click the "Get Started" button
                            above, or Sign in in the far right of the header
                            links.{' '}
                        </p>
                        <img
                            src={screen3}
                            alt="screenshot of login page"
                            className="border border-v2-drkblue w-1/2"
                        />
                    </div>
                </div>
            </div>
        </div>
    )
}
