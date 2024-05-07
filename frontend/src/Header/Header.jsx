import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import logo from './logo.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'

function Header() {
    const [showMenu, setShowMenu] = useState(false)
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
                <nav className="font-semibold flex items-center">
                    <ul className="flex flex-row gap-2 lg:flex lg:flex-row lg:gap-6 text-blue-800 dark:text-neutral-200">
                        <li className=" hover:text-blue-500 dark:hover:text-blue-400 hidden sm:flex">
                            <Link to="/bp/contact">Contact</Link>
                        </li>
                        <li className="hover:text-blue-500 dark:hover:text-blue-400 hidden sm:flex">
                            <Link to="/bp/about">About</Link>
                        </li>
                        <li className="hover:text-blue-500 dark:hover:text-blue-400 hidden sm:flex">
                            <Link to="/login">Sign In</Link>
                        </li>
                        <li>
                            <FontAwesomeIcon
                                icon={faBars}
                                className="burger sm:hidden text-2xl"
                                onClick={() => setShowMenu(!showMenu)}
                            />
                        </li>
                    </ul>
                </nav>
            </div>
        </header>
    )
}

export default Header
