import React from 'react'
import { Link } from 'react-router-dom'

export default function CallToActionBlock() {
    return (
        <div className="lg:w-4/5 text-center lg:text-midxl font-medium lg:p-12 my-8">
            <p className="mb-10">
                Are you ready to wellness up your workplace? Click here to
                register an account and get your workness wellplace journey
                started!
            </p>
            <div className="py-3">
                <Link to="/register" className="button-light-blue">
                    Get Started
                </Link>
            </div>
        </div>
    )
}
