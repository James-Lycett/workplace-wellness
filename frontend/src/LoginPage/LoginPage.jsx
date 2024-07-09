import React, { useState, useEffect } from 'react'
import { useNavigate, useLocation } from 'react-router-dom'
// import UserHome from "./UserHome";
import { userLogin } from '../utils/api'
import '../index.css'
import { initFlowbite } from 'flowbite'
import ErrorAlert from '../utils/ErrorAlert'

export default function LoginPage() {
    const location = useLocation()
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [isPopoverVisible, setIsPopoverVisible] = useState(false)
    const [error, setError] = useState(location.state || null)
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
            const responseFromApi = await userLogin(
                username,
                password,
                abortController.signal
            )
            const { person_id } = responseFromApi
            navigate(`/dashboard/${person_id}`)
        } catch (e) {
            setError(e)
        }
    }

    const loginAsAdmin = () => {
        setUsername('blanfer0')
        setPassword('1')
        setIsPopoverVisible(false)
    }
    const loginAsUser = () => {
        setUsername('jtuminelli1')
        setPassword('2')
        setIsPopoverVisible(false)
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
                            className="relative border-0 bg-slate-100 my-4 py-3 md:px-2 px-2 w-full rounded max-w-2xl"
                            type="string"
                            id="username"
                            value={username}
                            placeholder="Username"
                            onChange={handleUsernameChange}
                        />
                        {/* Password input */}
                        <label htmlFor="password"></label>
                        <input
                            className="relative border-0 bg-slate-100 my-4 py-3 px-2 w-full rounded max-w-2xl"
                            type="password"
                            id="password"
                            autoComplete="new-password"
                            value={password}
                            placeholder="........"
                            onChange={handlePasswordChange}
                        />
                        <div className="flex flex-col items-center justify-center mt-4 mb-8">
                            <button
                                type="button"
                                className="underline hover:text-blue-500"
                                onClick={() => {
                                    setIsPopoverVisible(true)
                                }}
                            >
                                <p>Looking for a demo?</p>
                            </button>
                            {isPopoverVisible && (
                                <>
                                    <div className="fixed inset-0 bg-gray-900 bg-opacity-50 z-9"></div>
                                    <div
                                        data-popover
                                        id="popover-default"
                                        role="tooltip"
                                        className="absolute z-10 inline-block w-2/3 md:w-1/4 text-sm text-gray-500 bg-white border border-gray-200 rounded-lg shadow-sm dark:text-gray-400 dark:border-gray-600 dark:bg-gray-800"
                                    >
                                        <div className="flex justify-between px-3 py-2 bg-gray-100 border-b border-gray-200 rounded-t-lg dark:border-gray-600 dark:bg-gray-700">
                                            <h3 className="font-semibold text-gray-900 dark:text-white">
                                                Demo Credentials
                                            </h3>
                                            <button
                                                type="button"
                                                onClick={() =>
                                                    setIsPopoverVisible(false)
                                                }
                                            >
                                                x
                                            </button>
                                        </div>
                                        <div className="flex flex-col items-center px-3 py-2">
                                            <p
                                                onClick={loginAsAdmin}
                                                className="cursor-pointer underline hover:text-blue-500 my-1"
                                            >
                                                Fill-in Admin Login
                                            </p>
                                            <p
                                                onClick={loginAsUser}
                                                className="cursor-pointer underline hover:text-blue-500 my-1"
                                            >
                                                Fill-in User Login
                                            </p>
                                        </div>
                                    </div>
                                </>
                            )}
                        </div>
                        <ErrorAlert error={error}/>
                        {/* Sign in button */}
                        <div className="flex flex-col items-center justify-center max-w-52 mt-3">
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
