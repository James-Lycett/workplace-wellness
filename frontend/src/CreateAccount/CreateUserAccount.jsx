
import React, { useCallback, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { createUser } from '../utils/api'

export default function CreateUserAccount() {
    const [user, setUser] = useState({
        username: '',
        admin: false,
    })
    const [fullname, setFullName] = useState('')
    const [password, setPassword] = useState('')


    const navigate = useNavigate()

    function handleChange({ target: { name, value } }) {
        if (name === 'fullname') {
            setFullName(value)
        } else if (name === 'password') {
            setPassword(value)
        } else {
            setUser((previousUser) => ({
                ...previousUser,
                [name]: value,
            }))
        }
    }

    const submitUser = useCallback(
        async (user) => {
            const abortController = new AbortController()

            try {
                const response = await createUser(user, abortController.signal)
                return response
            } catch (error) {
                console.error(error)
                throw error
            } finally {
                abortController.abort()
            }
        },
        []
    )

    const handleSubmit = async (e) => {
        e.preventDefault()

        try {
            const response = await submitUser(user)

            // Assuming submitUser has updated user data, check user.admin as a boolean
            if (response && response.admin) {
                navigate('/admin/home')
            } else {
                navigate(`/user/${response.person_id}/home`)
            }
        } catch (error) {
            console.error(error)
        }
    }

    return (
        <div className="flex flex-col items-center justify-center">
            <h1 className="mt-8 text-3xl font-bold">
                You"re On the Journey to Better Mental Health
            </h1>
            <div
                className="mt-5 mb-2 block w-1/2 rounded border-2 border-black px-6 pb-[6px] pt-2 text-s font-medium leading-normal text-primary"
                data-te-ripple-init
            >
                <form onSubmit={handleSubmit}>
                    <div className="flex flex-col items-center justify-center">
                        {/* User fullname input */}
                        <div
                            className="relative my-6 py-2 px-2 w-full rounded border-2"
                            data-te-input-wrapper-init
                        >
                            <label htmlFor="fullname"></label>
                            <input
                                type="string"
                                id="fullname"
                                name="fullname"
                                value={fullname}
                                placeholder="First and Last Name"
                                onChange={handleChange}
                            />
                        </div>
                        {/* Username input */}
                        <div
                            className="relative mb-6 py-2 px-2 w-full rounded border-2"
                            data-te-input-wrapper-init
                        >
                            <label htmlFor="username"></label>
                            <input
                                type="string"
                                id="username"
                                name="username"
                                value={user.username}
                                placeholder="Enter Username"
                                onChange={handleChange}
                            />
                        </div>
                        {/* Password input */}
                        <div
                            class="relative mb-6 py-2 px-2 w-full rounded border-2"
                            data-te-input-wrapper-init
                        >
                            <label htmlFor="password"></label>
                            <input
                                type="password"
                                id="password"
                                name="password"
                                value={password}
                                placeholder="Password"
                                onChange={handleChange}
                            />
                        </div>
                        {/* Continue button */}
                        <div className="flex flex-col items-center justify-center">
                            <button
                                type="submit"
                                className="button-dark-rounded w-full mx-20"
                            >
                                {/* <a href="/user/registerForm"></a> */}
                                CONTINUE
                            </button>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    )
}
