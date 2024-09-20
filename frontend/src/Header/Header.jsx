import React, { useEffect, useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import logo from '../images/logo.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'

function Header() {
    const [showMenu, setShowMenu] = useState(false)
    const mobileMenuRef = useRef(null)

    function scrollToSection(sectionId) {
        if (sectionId) {
            const section = document.querySelector(sectionId)
            if (section) {
                section.scrollIntoView({ behavior: 'smooth' })
            }
        } else {
            window.scrollTo({
                top: 0,
                behavior: 'smooth',
            })
        }
    }

    useEffect(() => {
        function handleClickOutside(event) {
            if (
                mobileMenuRef.current &&
                !mobileMenuRef.current.contains(event.target)
            ) {
                setShowMenu(false)
            }
        }

        // detect clicks outside of the mobile menu
        document.addEventListener('mousedown', handleClickOutside)

        // Cleanup
        return () => {
            document.removeEventListener('mousedown', handleClickOutside)
        }
    }, [mobileMenuRef])

    return (
        <header className=" sticky top-0 z-20 bg-white text-center text-neutral-600 border-b dark:bg-neutral-600 dark:text-neutral-200">
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
                <nav className="font-normal flex items-center ">
                    <ul className="hidden md:flex flex-row gap-3 lg:flex lg:flex-row lg:gap-6 text-blue-800 dark:text-neutral-200">
                        <li className="text-red-800 hover:text-blue-500 dark:hover:text-blue-400 font-bold">
                            <Link to="/" state={{ sectionId: 'tutorial' }}>
                                Tutorial
                            </Link>
                        </li>
                        <li className=" hover:text-blue-500 dark:hover:text-blue-400 ">
                            <Link to="/bp/contact" onClick={scrollToSection}>
                                Contact
                            </Link>
                        </li>
                        <li className="hover:text-blue-500 dark:hover:text-blue-400">
                            <Link to="/bp/about" onClick={scrollToSection}>
                                About
                            </Link>
                        </li>
                        <li className="hover:text-blue-500 dark:hover:text-blue-400">
                            <Link to="/bp/careers" onClick={scrollToSection}>
                                Careers
                            </Link>
                        </li>
                        <li className="hover:text-blue-500 dark:hover:text-blue-400">
                            <Link to="/login" onClick={scrollToSection}>
                                Sign In
                            </Link>
                        </li>
                    </ul>
                    <FontAwesomeIcon
                        icon={faBars}
                        className="burger text-2xl md:hidden"
                        onClick={() => {
                            setShowMenu(!showMenu)
                        }}
                    />
                    <div
                        ref={mobileMenuRef}
                        className="mobile-menu text-v2-drkblue"
                        style={{ display: showMenu ? 'flex' : 'none' }}
                    >
                        <Link
                            to="/"
                            className="py-4 text-2xl hover:bg-v2-ltblue hover:text-white text-red-800 font-bold"
                            state={{ sectionId: 'tutorial' }}
                            onClick={(e) => {
                                setShowMenu(false)
                            }}
                        >
                            Tutorial
                        </Link>
                        <Link
                            to="/bp/contact"
                            className="py-4 text-2xl hover:bg-v2-ltblue hover:text-white"
                            onClick={() => {
                                setShowMenu(!showMenu)
                                scrollToSection()
                            }}
                        >
                            Contact
                        </Link>
                        <Link
                            to="/bp/about"
                            className="py-4 text-2xl hover:bg-v2-ltblue hover:text-white"
                            onClick={() => {
                                setShowMenu(!showMenu)
                                scrollToSection()
                            }}
                        >
                            About
                        </Link>
                        <Link
                            to="/bp/careers"
                            className="py-4 text-2xl hover:bg-v2-ltblue hover:text-white"
                            onClick={() => {
                                setShowMenu(!showMenu)
                                scrollToSection()
                            }}
                        >
                            Careers
                        </Link>
                        <Link
                            to="/login"
                            className="py-4 text-2xl hover:bg-v2-ltblue hover:text-white"
                            onClick={() => {
                                setShowMenu(!showMenu)
                                scrollToSection()
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
