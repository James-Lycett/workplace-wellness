import React, { useCallback, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { createUser } from '../utils/api'

export default function CreateAccount() {
    const [userType, setUserType] = useState('unselected')
    const navigate = useNavigate() // Initialize useHistory hook

    const [user, setUser] = useState({
        username: '',
        admin: true,
    })
    const [password, setPassword] = useState('')
    const [passwordConfirm, setPasswordConfirm] = useState('')
    const [ein, setEin] = useState('')

    function handleChange({ target: { name, value } }) {
        if (name === 'dropdown') {
            setUserType(value)
            setUser((previousUser) => ({
                ...previousUser,
                admin: value === 'admin' ? true : false,
            }))
        } else if (name === 'password') {
            setPassword(value)
        } else if (name === 'confirm-password') {
            setPasswordConfirm(value)
        } else if (name === 'ein') {
            setEin(value)
        } else {
            setUser((previousUser) => ({
                ...previousUser,
                [name]: value,
            }))
        }
    }

    const submitUser = useCallback(async (user) => {
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
    }, [])

    const handleSubmit = async (e) => {
        e.preventDefault()
        user.age = Number(user.age)

        try {
            const response = await submitUser(user)

            navigate(`/dashboard/${response.person_id}`)
        } catch (error) {
            console.error(error)
        }
    }

    // Form field conditional renders
    let eidField = ''
    if (userType === 'admin') {
        eidField = (
            <>
                <label htmlFor="ein"></label>
                <input
                    className="relative border-0 bg-slate-100 my-4 py-3 px-2 w-full rounded max-w-2xl"
                    type="text"
                    id="ein"
                    name="ein"
                    value={ein}
                    placeholder="Employer Identification Number"
                    onChange={handleChange}
                />
            </>
        )
    }

    return (
        <div className="flex flex-col items-center justify-center">
            <div className="flex items-center justify-center">
                <h1 className="mt-8 mx-5 text-3xl font-bold text-center">
                    You're On the Journey to Better Mental Health
                </h1>
            </div>
            <div
                className="mt-5 mb-2 block w-full sm:px-0 sm:w-3/4 px-6 pb-[6px] pt-2 text-s font-medium leading-normal text-primary"
                data-te-ripple-init
            >
                <form onSubmit={handleSubmit}>
                    <div className="flex flex-col items-center justify-center">
                        {/* Select user type */}
                        <label htmlFor="userType"></label>
                        <select
                            className="relative border-0 bg-slate-100 my-4 py-3 px-2 w-full rounded max-w-2xl"
                            name="dropdown"
                            id="userType"
                            onChange={handleChange}
                        >
                            <option value="unselected">
                                Select Type of Account
                            </option>
                            <option value="admin">Admin</option>
                            <option value="user">User</option>
                        </select>
                        {/* Username input */}
                        <label htmlFor="username"></label>
                        <input
                            className="relative border-0 bg-slate-100 my-4 py-3 px-2 w-full rounded max-w-2xl"
                            type="text"
                            id="username"
                            name="username"
                            required={true}
                            value={user.username}
                            placeholder={
                                userType === 'user' || userType === 'unselected'
                                    ? 'Enter Username'
                                    : 'Legal First and Last Name'
                            }
                            onChange={handleChange}
                        />
                        {eidField}
                        {/* Password input */}
                        <label htmlFor="password"></label>
                        <input
                            className="relative border-0 bg-slate-100 my-4 py-3 px-2 w-full rounded max-w-2xl"
                            type="password"
                            id="password"
                            name="password"
                            value={password}
                            placeholder={
                                userType === 'admin'
                                    ? 'Location Password'
                                    : 'Password'
                            }
                            onChange={handleChange}
                        />
                        {userType === 'user' && (
                            <>
                                <label htmlFor="confirm-password"></label>
                                <input
                                    className="relative border-0 bg-slate-100 my-4 py-3 px-2 w-full rounded max-w-2xl"
                                    type="password"
                                    id="confirm-password"
                                    name="confirm-password"
                                    value={passwordConfirm}
                                    placeholder={'Confirm Password'}
                                    onChange={handleChange}
                                />
                            </>
                        )}
                        {/* Register button */}
                        <div className="flex flex-col items-center justify-center max-w-52 mt-5">
                            <button
                                type="submit"
                                className="w-full text-xl font-bold mx-20 button-light-blue"
                            >
                                REGISTER
                            </button>
                        </div>
                        <p className="my-5">
                            <a href="/login" className="underline ">
                                Sign In
                            </a>
                        </p>
                    </div>
                </form>
            </div>
        </div>
    )
}
