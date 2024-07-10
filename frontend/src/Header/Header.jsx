import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import logo from './logo.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'

function Header() {
    const [showMenu, setShowMenu] = useState(false)

    function scrollToTop() {
        window.scrollTo({
            top: 0,
            behavior: 'smooth', // Smooth scroll animation
        })
    }

    return (
        <header className="bg-white text-center text-neutral-600 border-b dark:bg-neutral-600 dark:text-neutral-200">
            <div className="flex flex-row justify-between pe-16 ">
                <div className="flex flex-col mx-12">
                    <Link to="/">
                        <img
                            src={logo}
                            alt="Logo"
                            className="  lg:ms-3 w-1/2"
                        />
                    </Link>
                </div>
                <nav className="font-semibold flex items-center ">
                    <ul className="hidden sm:flex flex-row gap-3 lg:flex lg:flex-row lg:gap-6 text-blue-800 dark:text-neutral-200">
                        <li className=" hover:text-blue-500 dark:hover:text-blue-400 ">
                            <Link to="/bp/contact" onClick={scrollToTop}>
                                Contact
                            </Link>
                        </li>
                        <li className="hover:text-blue-500 dark:hover:text-blue-400">
                            <Link to="/bp/about" onClick={scrollToTop}>
                                About
                            </Link>
                        </li>
                        <li className="hover:text-blue-500 dark:hover:text-blue-400">
                            <Link to="/bp/careers" onClick={scrollToTop}>
                                Careers
                            </Link>
                        </li>
                        <li className="hover:text-blue-500 dark:hover:text-blue-400">
                            <Link to="/login" onClick={scrollToTop}>
                                Sign In
                            </Link>
                        </li>
                    </ul>
                    <FontAwesomeIcon
                        icon={faBars}
                        className="burger text-2xl sm:hidden"
                        onClick={() => {
                            setShowMenu(!showMenu)
                            scrollToTop()
                        }}
                    />
                    <div
                        className="mobile-menu text-v2-drkblue"
                        style={{ display: showMenu ? 'flex' : 'none' }}
                    >
                        <Link
                            to="/bp/contact"
                            className="py-4 text-2xl hover:bg-v2-ltblue hover:text-white"
                            onClick={() => {
                                setShowMenu(!showMenu)
                                scrollToTop()
                            }}
                        >
                            Contact
                        </Link>
                        <Link
                            to="/bp/about"
                            className="py-4 text-2xl hover:bg-v2-ltblue hover:text-white"
                            onClick={() => {
                                setShowMenu(!showMenu)
                                scrollToTop()
                            }}
                        >
                            About
                        </Link>
                        <Link
                            to="/login"
                            className="py-4 text-2xl hover:bg-v2-ltblue hover:text-white"
                            onClick={() => {
                                setShowMenu(!showMenu)
                                scrollToTop()
                            }}
                        >
                            Sign In
                        </Link>
                    </div>
                </nav>
            </div>
        </header>
    )
}

export default Header
