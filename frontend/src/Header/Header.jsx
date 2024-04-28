import React from "react";
import { Link } from "react-router-dom";
import logo from "./logo.png"

function Header() {
    return (
        <header className="bg-white text-center text-neutral-600 dark:bg-neutral-600 dark:text-neutral-200">
            <div className="flex flex-col lg:flex-row lg:justify-between lg:pe-16">
                <div className="flex flex-col mx-12">
                    <Link 
                        to="/"
                    >
                        <img src={logo} alt="Logo" className="m-auto lg:ms-3 lg:w-1/2" />
                    </Link>
                </div>
                <nav className="font-semibold lg:flex lg:items-center">
                    <ul className="flex flex-col gap-2 lg:flex lg:flex-row lg:gap-6 text-blue-800 dark:text-neutral-200">
                        <li className=" hover:text-blue-500 dark:hover:text-blue-400">
                            <Link
                                to="/bp/contact"
                            >
                                Contact
                            </Link>
                        </li>
                        <li className="hover:text-blue-500 dark:hover:text-blue-400">
                            <Link
                                to="/bp/about"
                            >
                                About
                            </Link>
                        </li>
                        <li className="hover:text-blue-500 dark:hover:text-blue-400">
                            <Link
                                to="/login"
                            >
                                Sign In
                            </Link>
                        </li>
                    </ul>
                </nav>
            </div>
        </header>
    )
}

export default Header