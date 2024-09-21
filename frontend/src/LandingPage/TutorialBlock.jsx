import login0 from '../images/login0.png'
import login1 from '../images/login1.png'
import login2 from '../images/login2.png'
import login3 from '../images/login3.png'
import dash1 from '../images/dash1.png'
import dash1a from '../images/dash1a.png'
import dash1b from '../images/dash1b.png'
import dash1c from '../images/dash1c.png'
import dash2 from '../images/dash2.png'
import dash2a from '../images/dash2a.png'
import { useState } from 'react'

export default function TutorialBlock() {
    const [modalImage, setModalImage] = useState(null)
    const openModal = (image) => {
        setModalImage(image)
    }
    const closeModal = (image) => {
        setModalImage(null)
    }

    return (
        <>
            {modalImage && (
                <div
                    onClick={closeModal}
                    className="fixed inset-0 z-50 bg-black bg-opacity-80 flex justify-center items-center"
                >
                    <div className="relative">
                        <img
                            src={modalImage}
                            onClick={(e) => e.stopPropagation()}
                            alt="Enlarged view"
                            className="max-w-full max-h-screen"
                        />
                        <button
                            onClick={closeModal}
                            className="absolute top-2 right-2 bg-white text-black px-3 py-1 rounded-full border-2"
                        >
                            Close
                        </button>
                    </div>
                </div>
            )}

            <div
                id="tutorial"
                name="tutorial"
                className="bg-slate-50 mb-20 mx-5 lg:mx-20 pb-10"
            >
                <h2 className="text-3xl text-center my-10">
                    How to Use Workplace Wellness
                </h2>
                <h3 className="text-2xl text-center my-10 border-bottom">
                    Signing In / Registering
                </h3>
                <div className="flex flex-col gap-5 px-10">
                    <div className="flex flex-col lg:flex-row gap-5 items-center">
                        <p className="order-2 lg:order-1">
                            To sign in simply click the "Get Started" button
                            above, or "Sign In" on the far right of the header
                            links. You will be directed to the sign in page
                            pictured here.
                        </p>
                        <img
                            src={login0}
                            onClick={() => openModal(login0)}
                            alt="screenshot of the homepage with links to sign in circled"
                            className="border border-v2-drkblue w-full lg:w-1/2 cursor-pointer order-1 lg:order-2"
                        />
                    </div>
                    <div className="flex flex-col lg:flex-row gap-5 items-center">
                        <p className="order-2 lg:order-1">
                            Feel free to register a new account (we recommend
                            chosing admin to see all of the features WW has to
                            offer). But for now, we're going to sign in using
                            the demo credentials
                        </p>
                        <img
                            src={login1}
                            onClick={() => openModal(login1)}
                            alt="screenshot of login page with demo link circled"
                            className="border border-v2-drkblue w-full lg:w-1/2 cursor-pointer order-1 lg:order-2"
                        />
                    </div>
                    <div className="flex flex-col justify-center lg:flex-row gap-5 items-center">
                        <p className="order-2 lg:order-1">
                            Click on the "Looking for a demo?" link to open a
                            pop-up with the Demo Credentials. We're going to
                            choose Admin so click "Fill-in Admin Login".
                        </p>
                        <img
                            src={login2}
                            onClick={() => openModal(login2)}
                            alt="screenshot of the demo credentials modal"
                            className="border border-v2-drkblue w-full lg:w-1/2 cursor-pointer order-1 lg:order-2"
                        />
                    </div>
                    <div className="flex flex-col lg:flex-row gap-5 items-center">
                        <p className="order-2 lg:order-1">
                            The username and password (encrypted) should now be
                            provided for you, so just click the "Sign In"
                            button.
                        </p>
                        <img
                            src={login3}
                            onClick={() => openModal(login3)}
                            alt="screenshot of login page"
                            className="border border-v2-drkblue w-full lg:w-1/2 cursor-pointer order-1 lg:order-2"
                        />
                    </div>
                </div>
                <h3 className="text-2xl text-center my-10 border-bottom">
                    Using the Dashboard
                </h3>
                <div className="flex flex-col gap-10 px-10">
                    <div className="flex flex-col lg:flex-row gap-5 items-center">
                        <p className="order-2 lg:order-1">
                            You're in! The Dashboard is where all the muscle of
                            workplace Wellness gets flexed. Here you can see
                            department statistics, manage employees, set goals,
                            add employees and much more. Let's break it down and
                            go over the features.
                        </p>
                        <img
                            src={dash1}
                            onClick={() => openModal(dash1)}
                            alt="screenshot of the Admin dashboard"
                            className="border border-v2-drkblue w-full lg:w-1/2 cursor-pointer order-1 lg:order-2"
                        />
                    </div>
                    <div className="flex flex-col lg:flex-row gap-5 items-center">
                        <div className="order-2 lg:order-1">
                            <p className="mb-3">
                                First let's look at the top bar. Here we have
                                some details for your account and an overview of
                                your department.
                            </p>
                            <p>
                                1. Your Username and occupation as well as your
                                profile picture
                            </p>
                            <p>
                                2. Tells you whether you are in Admin view or
                                looking at your personal logs
                            </p>
                            <p>
                                3. Some generated stats from your team's health
                                and sleep logs
                            </p>
                        </div>
                        <img
                            src={dash1a}
                            onClick={() => openModal(dash1a)}
                            alt="screenshot of admin header bar"
                            className="border border-v2-drkblue w-full lg:w-1/2 cursor-pointer order-1 lg:order-2"
                        />
                    </div>
                    <div className="flex flex-col lg:flex-row gap-5 items-center">
                        <p className="order-2 lg:order-1">
                            Next we'll look at the goals display. The name and
                            percentage of your team's efforts towards their goal
                            are displayed in a radial bar graph. To edit the
                            goal, simply click edit in the bottom right of the
                            tile for the goal you want to change.
                        </p>
                        <img
                            src={dash1b}
                            onClick={() => openModal(dash1b)}
                            alt="screenshot of team goal graphs"
                            className="border border-v2-drkblue w-full lg:w-1/2 cursor-pointer order-1 lg:order-2"
                        />
                    </div>
                    <div className="flex flex-col lg:flex-row gap-5 items-center">
                        <div className="order-2 lg:order-1">
                            <p className="mb-3">
                                Last, we'll look at the users table. Here is
                                where you can manage your team.
                            </p>
                            <p>
                                1. Switch between Admin (Employees) and Personal
                                (Profile) view
                            </p>
                            <p>2. Add a new employee to your team</p>
                            <p>3. Search for employees</p>
                            <p>4. Sort employees by any category</p>
                            <p>5. Edit or delete employees</p>
                        </div>
                        <img
                            src={dash1c}
                            onClick={() => openModal(dash1c)}
                            alt="screenshot of employee table"
                            className="border border-v2-drkblue w-full lg:w-1/2 cursor-pointer order-1 lg:order-2"
                        />
                    </div>
                    <div className="flex flex-col lg:flex-row gap-5 items-center">
                        <p className="order-2 lg:order-1">
                            Now let's look at the personal view by clicking
                            "Profile" in the sidebar. Everything should still
                            look familiar, except instead of employees you
                            should now see your health logs listed in the table.
                        </p>
                        <img
                            src={dash2}
                            onClick={() => openModal(dash2)}
                            alt="screenshot of personal profile view"
                            className="border border-v2-drkblue w-full lg:w-1/2 cursor-pointer order-1 lg:order-2"
                        />
                    </div>
                    <div className="flex flex-col lg:flex-row gap-5 items-center">
                        <div className="order-2 lg:order-1">
                            <p className="mb-3">
                                Last, we'll look at the users table. Here is
                                where you can manage your team.
                            </p>
                            <p>1. Log new physical and sleep activity</p>
                            <p>
                                2. Read more about mental, physical, and sleep
                                health
                            </p>
                            <p>3. Sort your logs to help see patterns</p>
                            <p>
                                4. Edit or delete logs you forgot or put in by
                                error
                            </p>
                        </div>
                        <img
                            src={dash2a}
                            onClick={() => openModal(dash2a)}
                            alt="screenshot of fitness logs"
                            className="border border-v2-drkblue w-full lg:w-1/2 cursor-pointer order-1 lg:order-2"
                        />
                    </div>
                </div>
                <h3 className="text-2xl text-center my-20 border-bottom">
                    That's the basic rundown of Workplace Wellness and how to
                    use it. Feel free to play around and let us know what you
                    think.
                </h3>
            </div>
        </>
    )
}
