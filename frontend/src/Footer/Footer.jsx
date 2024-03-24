import React from 'react'
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa' // Import the icons
import logo from './wwlogo_notext.png'
import { Link } from 'react-router-dom'

export default function Footer() {
    return (
        <footer className="bg-neutral-100 text-center text-neutral-600 dark:bg-neutral-600 dark:text-neutral-200 lg:text-left">
            <div className="flex items-center justify-center border-neutral-200 dark:border-neutral-500 lg:justify-center">
                <div className="flex justify-between py-10">
                    {/* first half section */}
                    {/* social network */}
                    <div className="me-1 w-full">
                        <Link
                            to="/"
                            className="text-neutral-600 dark:text-neutral-200 hover:text-blue-500 dark:hover:text-blue-400"
                        >
                            <img src={logo} alt="Logo" className="w-20 h-20" />
                        </Link>
                        <p className="mb-5">
                            Where your mental health comes first.
                        </p>
                    </div>

                    {/* second half section */}
                    <div className="w-pull md:w-1/2 lg:w-2/3 xl:w-3/4 ml-20 px-10"></div>
                    {/* Company */}
                    <div className="col-span-1 flex flex-col justify-center mr-10 w-full md:w-1/2 lg:w-2/3 xl:w-3/4">
                        <h5 className="font-bold">Company</h5>
                        <p>
                            <Link
                                to="/bp/about"
                                className="text-neutral-600 dark:text-neutral-200 hover:text-blue-500 dark:hover:text-blue-400"
                            >
                                About
                            </Link>
                        </p>
                        <p>
                            <Link
                                to="/bp/careers"
                                className="text-neutral-600 dark:text-neutral-200 hover:text-blue-500 dark:hover:text-blue-400"
                            >
                                Careers
                            </Link>
                        </p>
                        <p>
                            <Link
                                to="/bp/contact"
                                className="text-neutral-600 dark:text-neutral-200 hover:text-blue-500 dark:hover:text-blue-400"
                            >
                                Contact us
                            </Link>
                        </p>
                        <p>
                            <Link
                                to="/"
                                className="text-neutral-600 dark:text-neutral-200 hover:text-blue-500 dark:hover:text-blue-400"
                            >
                                Home
                            </Link>
                        </p>
                    </div>
                    {/* Support */}
                    <div className="col-span-1 flex flex-col justify-center mx-10 w-full md:w-1/2 lg:w-2/3 xl:w-3/4">
                        <h5 className="font-bold">Support</h5>
                        <p className="text-neutral-600 dark:text-neutral-200">
                            Help center
                        </p>
                        <p className="text-neutral-600 dark:text-neutral-200">
                            Getting started
                        </p>
                        <p className="text-neutral-600 dark:text-neutral-200">
                            Report a bug
                        </p>
                        <p className="text-neutral-600 dark:text-neutral-200">
                            Chat support
                        </p>
                    </div>
                    {/* Contact */}
                    <div className="col-span-1 flex flex-col justify-center mx-10">
                        <h5 className="font-bold">Contact Us</h5>
                        <div className="flex items-center">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 20 20"
                                fill="currentColor"
                                className="w-6 h-6"
                            >
                                <rect
                                    x="2"
                                    y="4"
                                    width="16"
                                    height="12"
                                    rx="2"
                                    stroke="currentColor"
                                    strokeWidth="1"
                                    fill="none"
                                />
                                <path d="M2 4l8 6 8-6v9H2z" />
                            </svg>
                            <p className="text-blue-500 hover:text-blue-700 underline">
                                contact@WorkplaceWellness.com
                            </p>
                        </div>
                        <div className="flex items-center">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 24 24"
                                fill="currentColor"
                                className="mr-3 h-5 w-5"
                            >
                                <path
                                    fill="none"
                                    stroke="currentColor"
                                    strokeWidth="2"
                                    fillRule="evenodd"
                                    d="M1.5 4.5a3 3 0 013-3h1.372c.86 0 1.61.586 1.819 1.42l1.105 4.423a1.875 1.875 0 01-.694 1.955l-1.293.97c-.135.101-.164.249-.126.352a11.285 11.285 0 006.697 6.697c.103.038.25.009.352-.126l.97-1.293a1.875 1.875 0 011.955-.694l4.423 1.105c.834.209 1.42.959 1.42 1.82V19.5a3 3 0 01-3 3h-2.25C8.552 22.5 1.5 15.448 1.5 6.75V4.5z"
                                    clipRule="evenodd"
                                />
                            </svg>
                            <p className=" hover:text-blue-700">(111)222 - 3333</p>
                        </div>
                        <div className="flex items-center justify-apart">
                            <svg
                                className="w-6 h-6"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M12 22s-8-4.5-8-11a8 8 0 0 1 16 0c0 6.5-8 11-8 11z"
                                />
                                <circle
                                    cx="12"
                                    cy="10"
                                    r="3"
                                    fill="currentColor"
                                />
                            </svg>
                            <p className="w-full md:w-1/2 lg:w-2/3 xl:w-3/4">
                                11 East 9th Street Manhattan, 10036
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="border-b-2 flex flex-col justify-center items-center mb-5 ">
                <p className="mb-2">Connect with us on our other platforms</p>
                <div className="flex space-x-4 mb-2">
                    <a
                        href="https://linkedin.com"
                        className="text-neutral-600 dark:text-neutral-200 hover:text-blue-500 dark:hover:text-blue-400"
                    >
                        <FaLinkedin />
                    </a>
                    <a
                        href="https://instagram.com"
                        className="text-neutral-600 dark:text-neutral-200 hover:text-purple-500 dark:hover:text-purple-400"
                    >
                        <FaInstagram />
                    </a>
                    <a
                        href="https://twitter.com"
                        className="text-neutral-600 dark:text-neutral-200 hover:text-blue-400 dark:hover:text-blue-300"
                    >
                        <FaTwitter />
                    </a>
                    <a
                        href="https://facebook.com"
                        className="text-neutral-600 dark:text-neutral-200 hover:text-blue-600 dark:hover:text-blue-500"
                    >
                        <FaFacebook />
                    </a>
                </div>
            </div>
            {/* copyright section */}
            <div className="flex items-center justify-between mx-12 py-3 text-center md:text-left">
                <div>Copyright &copy; 2024</div>
                <div>
                    All Rights Reserved |{' '}
                    <Link
                        to="/bp/terms"
                        className="text-blue-500 hover:underline"
                    >
                        Terms and Conditions
                    </Link>{' '}
                    |{' '}
                    <Link
                        to="/bp/privacy"
                        className="text-blue-500 hover:underline"
                    >
                        Privacy Policy
                    </Link>
                </div>
            </div>
        </footer>
    )
}

{
    /* <div class="flex justify-between">
  <div class="flex-col">
  (stuff on the left side)
  </div>
  <div class="flex-row">
  (stuff on the right side)
  </div>
</div> (edited) 

Tailwind has a "columns" utility which can do stuff like this to especially 
when combined with the width utility "w-*" but I haven't completely figured it out */
}
