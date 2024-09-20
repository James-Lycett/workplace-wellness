import React from 'react'
import '../index.css'
import IntroBlock from './IntroBlock'
import FeaturesBlock from './FeaturesBlock'
import CallToActionBlock from './CallToActionBlock'
import login0 from '../images/login0.png'
import login1 from '../images/login1.png'
import login2 from '../images/login2.png'
import login3 from '../images/login3.png'
import dash1 from '../images/dash1.png'
import dash2 from '../images/dash2.png'

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
                    Signing In / Registering
                </h3>
                <div className="flex flex-col gap-5 mx-20 px-10">
                    <div className="flex gap-5 items-center">
                        <p>
                            To sign in simply click the "Get Started" button
                            above, or Sign in in the far right of the header
                            links. You will be directed to the sign in page
                            pictured here.
                        </p>
                        <img
                            src={login0}
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
                            src={login1}
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
                            src={login2}
                            alt="screenshot of login page"
                            className="border border-v2-drkblue w-1/2"
                        />
                    </div>
                    <div className="flex gap-5 items-center">
                        <p>
                            The username and password (encripted) should now be
                            provided for you, so just click the "Sign In"
                            button.
                        </p>
                        <img
                            src={login3}
                            alt="screenshot of login page"
                            className="border border-v2-drkblue w-1/2"
                        />
                    </div>
                </div>
                <h3 className="text-2xl text-center my-10 border-bottom">
                    Using the Dashboard
                </h3>
                <div className="flex flex-col gap-5 mx-20 px-10">
                    <div className="flex gap-5 items-center">
                        <p>
                            You're in! The Dashboard is where all the muscle of
                            workplace Wellness gets flexed. Here you can see
                            department statistics, manage employees, set goals,
                            add employees and much more. Let's break it down and
                            go over the features.
                        </p>
                        <img
                            src={dash1}
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
                            src={dash2}
                            alt="screenshot of login page"
                            className="border border-v2-drkblue w-1/2"
                        />
                    </div>
                    {/* <div className="flex gap-5 items-center">
                        <p>
                            Click on the "Looking for a demo?" link to open a
                            pop-up with the Demo Credentials. We're going to
                            choose Admin so click "Fill-in Admin Login".
                        </p>
                        <img
                            src={login2}
                            alt="screenshot of login page"
                            className="border border-v2-drkblue w-1/2"
                        />
                    </div>
                    <div className="flex gap-5 items-center">
                        <p>
                            The username and password (encripted) should now be
                            provided for you, so just click the "Sign In"
                            button.
                        </p>
                        <img
                            src={login3}
                            alt="screenshot of login page"
                            className="border border-v2-drkblue w-1/2"
                        />
                    </div> */}
                </div>
            </div>
        </div>
    )
}
