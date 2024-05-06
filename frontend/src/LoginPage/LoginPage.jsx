import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
// import UserHome from "./UserHome";
import { readUserByUsername } from '../utils/api'
import '../index.css'

export default function LoginPage() {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const navigate = useNavigate()

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

    return (
        <div className="flex flex-col items-center justify-center">
            <h1 className="mt-8 text-3xl font-bold">Welcome Back</h1>
            <div
                className="mt-5 mb-2 block w-1/2 px-6 pb-[6px] pt-2 text-s font-medium leading-normal text-primary"
                data-te-ripple-init
            >
                <form onSubmit={handleSubmit}>
                    <div className="flex flex-col items-center justify-center">
                        {/* Username input */}
                        <label htmlFor="username"></label>
                        <input
                            className="relative bg-slate-100 mt-8 mb-6 py-2 px-2 w-full rounded"
                            type="string"
                            id="username"
                            value={username}
                            placeholder="Enter Username"
                            onChange={handleUsernameChange}
                        />
                        {/* Password input */}
                        <label htmlFor="password"></label>
                        <input
                            className="relative border-0 bg-slate-100 mb-6 py-2 px-2 w-full rounded"
                            type="password"
                            id="password"
                            autocomplete="new-password"
                            value={password}
                            placeholder="........"
                            onChange={handlePasswordChange}
                        />
                        <div className="flex flex-col items-center justify-center mt-6 mb-20">
                            <p>Forget your password?</p>
                            <a
                                href="#"
                                className="underline hover:text-blue-500"
                            >
                                Reset Password
                            </a>
                        </div>
                        {/* Sign in button */}
                        <div className="flex flex-col items-center justify-center">
                            <button
                                type="submit"
                                className="button-dark-rounded w-full mx-20"
                            >
                                SIGN IN
                            </button>
                        </div>
                        <p>
                            Or,{' '}
                            <a href="/register" className="underline">
                                {' '}
                                {/* fixed route from ./register */}
                                Register
                            </a>
                        </p>
                    </div>
                </form>
            </div>
        </div>
    )
}
