import React, { useEffect } from 'react'
import { FaRegEnvelope } from 'react-icons/fa' // Import the icons
import { FiPhone } from 'react-icons/fi'
import { SlLocationPin } from 'react-icons/sl'
import logo from '../images/logo.png'
import { Link } from 'react-router-dom'
import { Accordion } from 'flowbite'

function scrollToTop() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth', // Smooth scroll animation
    })
}

export default function Footer() {
    useEffect(() => {
        const accordionElement = document.getElementById('accordion-example')

        // array of objects with the id, trigger element (eg. button), and the content element
        const accordionItems = [
            {
                id: 'accordion-collapse-heading-1',
                triggerEl: document.querySelector(
                    '#accordion-collapse-heading-1 button'
                ),
                targetEl: document.querySelector('#accordion-collapse-body-1'),
                active: false,
            },
            {
                id: 'accordion-collapse-heading-2',
                triggerEl: document.querySelector(
                    '#accordion-collapse-heading-2 button'
                ),
                targetEl: document.querySelector('#accordion-collapse-body-2'),
                active: false,
            },
            {
                id: 'accordion-collapse-heading-3',
                triggerEl: document.querySelector(
                    '#accordion-collapse-heading-3 button'
                ),
                targetEl: document.querySelector('#accordion-collapse-body-3'),
                active: false,
            },
        ]

        // options with default values
        const options = {
            alwaysOpen: true,
            activeClasses:
                'bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-white',
            inactiveClasses: 'text-gray-500 dark:text-gray-400',
            onOpen: (item) => {
                //console.log('accordion item has been shown')
                //console.log(item)
            },
            onClose: (item) => {
                //console.log('accordion item has been hidden')
                //console.log(item)
            },
            onToggle: (item) => {
                //console.log('accordion item has been toggled')
                //console.log(item)
            },
        }

        // instance options object
        const instanceOptions = {
            id: 'accordion-example',
            override: true,
        }

        const accordion = new Accordion(
            accordionElement,
            accordionItems,
            options,
            instanceOptions
        )

        // Cleanup function
        return () => {
            accordion.destroy()
        }
    }, []) // Empty dependency array ensures the effect runs only once after mount

    return (
        <footer className="bg-white text-center text-neutral-600 dark:bg-neutral-600 dark:text-neutral-200 lg:text-left border-t border-grey-100">
            <div className="flex md:flex-row flex-col md:justify-around md:p-14">
                {/* Logo */}
                <div className="flex flex-col items-center md:max-w-40 lg:max-w-[300px]">
                    <Link
                        to="/"
                        className="flex justify-center md:justify-start"
                    >
                        <img
                            src={logo}
                            alt="Logo"
                            className="md:w-full w-1/2"
                        />
                    </Link>
                </div>
                <div className="md:flex md:flex-row hidden gap-10  lg:text-base">
                    {/* Company Links */}
                    <div className="flex flex-col md:gap-5 gap-3 text-blue-800">
                        <p className="font-bold lg:mb-6">Company</p>
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
                    <div className="flex flex-col md:gap-5 gap-3 text-black md:mt-0 mt-6">
                        <p className="font-bold lg:mb-6 self-center text-blue-800">
                            Support
                        </p>
                        <p className="dark:text-neutral-200">Help center</p>
                        <p className="dark:text-neutral-200">Getting started</p>
                        <p className="dark:text-neutral-200">Report a bug</p>
                        <p className="dark:text-neutral-200">Chat support</p>
                    </div>
                    {/* Contact */}
                    <div className="flex flex-col items-center md:items-start lg:gap-6 gap-3 lg:my-0 my-6 md:mt-0 mt-6 text-black">
                        <p className="font-bold self-center lg:mb-6 text-blue-800">
                            Contact Us
                        </p>
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
            </div>
            <div
                id="accordion-collapse"
                data-accordion="collapse"
                className="md:hidden text-v2-drkblue"
            >
                <h2 id="accordion-collapse-heading-1">
                    <button
                        type="button"
                        className="flex items-center justify-between w-full p-5 font-medium"
                        aria-expanded="false"
                        aria-controls="accordion-collapse-body-1"
                    >
                        <span className="text-v2-drkblue">Company</span>
                        <svg
                            data-accordion-icon
                            className="w-3 h-3 rotate-180 shrink-0"
                            aria-hidden="true"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 10 6"
                        >
                            <path
                                stroke="currentColor"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M9 5 5 1 1 5"
                            />
                        </svg>
                    </button>
                </h2>
                <div
                    id="accordion-collapse-body-1"
                    className="hidden"
                    aria-labelledby="accordion-collapse-heading-1"
                >
                    <div className="p-5 flex flex-col gap-5">
                        <Link
                            to="/bp/about"
                            onClick={scrollToTop}
                            className=" dark:text-neutral-200 hover:text-blue-500 dark:hover:text-blue-400"
                        >
                            About
                        </Link>
                        <Link
                            to="/bp/careers"
                            onClick={scrollToTop}
                            className="dark:text-neutral-200 hover:text-blue-500 dark:hover:text-blue-400"
                        >
                            Careers
                        </Link>
                        <Link
                            to="/bp/contact"
                            onClick={scrollToTop}
                            className="dark:text-neutral-200 hover:text-blue-500 dark:hover:text-blue-400"
                        >
                            Contact us
                        </Link>
                    </div>
                </div>
                <h2 id="accordion-collapse-heading-2">
                    <button
                        type="button"
                        className="flex items-center justify-between w-full p-5 font-medium"
                        aria-expanded="false"
                        aria-controls="accordion-collapse-body-2"
                    >
                        <span className="text-v2-drkblue">Support</span>
                        <svg
                            data-accordion-icon
                            className="w-3 h-3 rotate-180 shrink-0"
                            aria-hidden="true"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 10 6"
                        >
                            <path
                                stroke="currentColor"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M9 5 5 1 1 5"
                            />
                        </svg>
                    </button>
                </h2>
                <div
                    id="accordion-collapse-body-2"
                    className="hidden"
                    aria-labelledby="accordion-collapse-heading-2"
                >
                    <div className="p-5 flex flex-col gap-5">
                        <p className="dark:text-neutral-200">Help center</p>
                        <p className="dark:text-neutral-200">Getting started</p>
                        <p className="dark:text-neutral-200">Report a bug</p>
                        <p className="dark:text-neutral-200">Chat support</p>
                    </div>
                </div>
                <h2 id="accordion-collapse-heading-3">
                    <button
                        type="button"
                        className="flex items-center justify-between w-full p-5 font-medium"
                        aria-expanded="false"
                        aria-controls="accordion-collapse-body-2"
                    >
                        <span className="text-v2-drkblue">Contact Us</span>
                        <svg
                            data-accordion-icon
                            className="w-3 h-3 rotate-180 shrink-0"
                            aria-hidden="true"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 10 6"
                        >
                            <path
                                stroke="currentColor"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M9 5 5 1 1 5"
                            />
                        </svg>
                    </button>
                </h2>
                <div
                    id="accordion-collapse-body-3"
                    className="hidden"
                    aria-labelledby="accordion-collapse-heading-1"
                >
                    <div className="p-5 flex flex-col gap-5">
                        <div className="flex items-center">
                            <p className="text-3xl me-3">
                                <FiPhone />
                            </p>
                            <p>(111) 222-3333</p>
                        </div>
                        <div className="flex items-center">
                            <p className="text-2xl me-3">
                                <FaRegEnvelope />
                            </p>
                            <p>info@workplacewellness.com</p>
                        </div>
                        <div className="flex items-center justify-apart">
                            <p className="text-3xl me-3">
                                <SlLocationPin />
                            </p>
                            <p>123 Serenity Street</p>
                            <p>Wellness City, WZ 54321</p>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    )
}
