import React from 'react'

const About = () => {
    return (
        <>
            <section className="max-w-screen-md mx-4 md:mx-auto my-8 p-6 bg-white">
                <div className="bg-gray-700 text-white p-6 mb-10 rounded-lg text-sm font-light inset-lg">
                    <p className="mb-4">
                        Workplace Wellness is a web application for tracking and
                        improving company-wide sleep health both for employees
                        and employers. Users can input daily sleep and health
                        metrics (eg., sleep duration, blood pressure, stress
                        level) and view past reports or check out recommended
                        strategies for improving their sleep health. Admins get
                        a bird's eye view of the entire company's sleep health
                        and can add or delete users as employees come and go
                        from the company.
                    </p>
                    <p>
                        This project was originally developed as a team project
                        for the{' '}
                        <span className="font-bold">
                            Chegg Skills Winter '24 Hackathon
                        </span>
                        . The team was comprised of three software engineers, a
                        UI/UX designer, a data analyst, and a senior advisor.
                        The repo you are looking at is the product of two of the
                        team engineers' later efforts to re-engineer the
                        codebase with an emphasis on refactoring and modernizing
                        the UI/UX.
                    </p>
                </div>
                <h5 className="text-3xl font-bold text-center">
                    Welcome to Workplace Wellness
                </h5>
                <br />
                <p>
                    Embark on a transformative journey with Workplace Wellness,
                    where your pursuit of improved sleep quality and enhanced
                    mental wellness takes center stage. At Workplace Wellness,
                    we understand the profound impact that sleep has on your
                    overall well-being. Our dedicated team is committed to
                    providing you with the tools and resources necessary to
                    unlock the secrets to a restful night's sleep and cultivate
                    mental resilience.
                </p>
                <br />
                <h5 className="text-xl font-bold text-center">Our Mission</h5>
                <br />
                <p>
                    At the core of Workplace Wellness is a mission to empower
                    individuals on their path to better mental health. We
                    recognize the challenges posed by stress, anxiety, and
                    insomnia, and we are here to guide you through
                    evidence-based practices and expertly curated articles. Our
                    mission extends beyond a simple sleep routine; we aim to
                    foster a community where compassion and information
                    converge, creating a space where you can truly thrive.
                </p>
                <br />
            </section>
        </>
    )
}

export default About
