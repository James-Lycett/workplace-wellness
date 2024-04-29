import React from 'react'
import { FaRegEnvelope } from 'react-icons/fa' // Import the icons
import { FiPhone } from 'react-icons/fi'
import { SlLocationPin } from 'react-icons/sl'
import logo from './logo.png'
import { Link } from 'react-router-dom'

export default function Footer() {
    return (
        <footer className="bg-white text-center text-neutral-600 dark:bg-neutral-600 dark:text-neutral-200 lg:text-left border-t border-grey-100">
            <div className="flex lg:flex-row flex-col lg:justify-around lg:ps-14 lg:py-14">
                {/* Logo */}
                <div className="flex flex-col mx-12">
                    <Link to="/">
                        <img
                            src={logo}
                            alt="Logo"
                            className="sm:w-1/2 md:w-1/2 lg:w-full sm:"
                        />
                    </Link>
                </div>
                {/* Company Links */}
                <div className="flex flex-col lg:gap-5 gap-3 text-blue-800">
                    <h5 className="font-bold lg:mb-6">Company</h5>
                    <Link
                        to="/bp/about"
                        className=" dark:text-neutral-200 hover:text-blue-500 dark:hover:text-blue-400"
                    >
                        About
                    </Link>
                    <Link
                        to="/bp/careers"
                        className="dark:text-neutral-200 hover:text-blue-500 dark:hover:text-blue-400"
                    >
                        Careers
                    </Link>
                    <Link
                        to="/bp/contact"
                        className="dark:text-neutral-200 hover:text-blue-500 dark:hover:text-blue-400"
                    >
                        Contact us
                    </Link>
                </div>
                {/* Support Links */}
                <div className="flex flex-col lg:gap-5 gap-3 text-blue-800">
                    <h5 className="font-bold lg:mb-6">Support</h5>
                    <p className="dark:text-neutral-200">Help center</p>
                    <p className="dark:text-neutral-200">Getting started</p>
                    <p className="dark:text-neutral-200">Report a bug</p>
                    <p className="dark:text-neutral-200">Chat support</p>
                </div>
                {/* Contact */}
                <div className="flex flex-col lg:gap-6 gap-3 lg:my-0 my-6 lg:ms-0 ms-6 text-blue-800">
                    <h5 className="font-bold lg:mb-6">Contact Us</h5>
                    <div className="flex items-center">
                        <p className="text-2xl me-3">
                            <FaRegEnvelope />
                        </p>
                        <p>info@workplacewellness.com</p>
                    </div>
                    <div className="flex items-center">
                        <p className="text-3xl me-3">
                            <FiPhone />
                        </p>
                        <p>(111) 222-3333</p>
                    </div>
                    <div className="flex items-center justify-apart">
                        <p className="text-3xl me-3">
                            <SlLocationPin />
                        </p>
                        <p>11 East 9th Street Manhattan, 10036</p>
                    </div>
                </div>
            </div>
        </footer>
    )
}
