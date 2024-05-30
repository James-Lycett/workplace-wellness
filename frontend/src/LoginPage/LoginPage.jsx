import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
// import UserHome from "./UserHome";
import { readUserByUsername } from '../utils/api'
import '../index.css'
import { initFlowbite } from 'flowbite'

export default function LoginPage() {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const navigate = useNavigate()

    useEffect(() => {
        initFlowbite()
    }, [])

    const handleUsernameChange = (e) => {
        setUsername(e.target.value)
    }

    const handlePasswordChange = (e) => {
        setPassword(e.target.value)
    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        const abortController = new AbortController()

        try {
            const responseFromApi = await readUserByUsername(
                username,
                abortController.signal
            )
            const userId = responseFromApi.person_id
            const admin = responseFromApi.admin
            if (admin) {
                navigate(`/admin/${userId}/home`)
            } else {
                navigate(`/user/${userId}/home`)
            }
        } catch (e) {
            console.error(e)
        }
    }

    const loginAsAdmin = () => {
        setUsername('blanfer0')
        setPassword('12345')
    }
    const loginAsUser = () => {
        setUsername('jtuminelli1')
        setPassword('12345')
    }

    return (
        <div className="flex flex-col items-center justify-center">
            <h1 className="mt-16 text-3xl font-bold">Welcome Back</h1>
            <div
                className="mt-8 mb-2 block px-10 pb-[6px] pt-2 text-s font-medium leading-normal text-primary w-full"
                data-te-ripple-init
            >
                <form onSubmit={handleSubmit}>
                    <div className="flex flex-col items-center justify-center ">
                        {/* Username input */}
                        <label htmlFor="username"></label>
                        <input
                            className="relative border-0 bg-slate-100 my-4 py-3 md:px-2 w-full rounded max-w-2xl"
                            type="string"
                            id="username"
                            value={username}
                            placeholder="Username or Email"
                            onChange={handleUsernameChange}
                        />
                        {/* Password input */}
                        <label htmlFor="password"></label>
                        <input
                            className="relative border-0 bg-slate-100 my-4 py-3 px-2 w-full rounded max-w-2xl"
                            type="password"
                            id="password"
                            autocomplete="new-password"
                            value={password}
                            placeholder="........"
                            onChange={handlePasswordChange}
                        />
                        <div className="flex flex-col items-center justify-center mt-4 mb-8">
                            <a
                                href="#"
                                data-popover-target="popover-default"
                                className="underline hover:text-blue-500"
                            >
                                <p>Looking for a demo?</p>
                                <div
                                    data-popover
                                    id="popover-default"
                                    role="tooltip"
                                    class="absolute z-10 invisible inline-block w-64 text-sm text-gray-500 transition-opacity duration-300 bg-white border border-gray-200 rounded-lg shadow-sm opacity-0 dark:text-gray-400 dark:border-gray-600 dark:bg-gray-800"
                                >
                                    <div class="px-3 py-2 bg-gray-100 border-b border-gray-200 rounded-t-lg dark:border-gray-600 dark:bg-gray-700">
                                        <h3 class="font-semibold text-gray-900 dark:text-white">
                                            Demo Credentials
                                        </h3>
                                    </div>
                                    <div class="px-3 py-2">
                                        <p
                                            onClick={loginAsAdmin}
                                            className="cursor-pointer underline hover:text-blue-500"
                                        >
                                            Fill-in Admin Login
                                        </p>
                                        <p
                                            onClick={loginAsUser}
                                            className="cursor-pointer underline hover:text-blue-500"
                                        >
                                            Fill-in User Login
                                        </p>
                                    </div>
                                    <div data-popper-arrow></div>
                                </div>
                            </a>
                        </div>
                        {/* Sign in button */}
                        <div className="flex flex-col items-center justify-center max-w-52">
                            <button
                                type="submit"
                                className="w-full text-xl font-bold mx-20 button-light-blue"
                            >
                                Sign In
                            </button>
                        </div>
                        <div className="left-right-divider flex items-center justify-center max-w-52">
                            <p className="mb-4 mt-2 mx-6">or </p>
                        </div>
                        <div className="flex flex-col mb-10 items-center justify-center max-w-52">
                            <button
                                href="/register"
                                className="w-full text-xl font bold mx-20 button-light-blue-inverse flex justify-center"
                            >
                                Register
                            </button>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    )
}
