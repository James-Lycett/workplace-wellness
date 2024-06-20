import React, { useCallback, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { createUser, userLogin } from '../utils/api'
import ErrorAlert from '../utils/ErrorAlert'

export default function CreateAccount() {
    const navigate = useNavigate() // Initialize useHistory hook
    const [error, setError] = useState(null)
    const [user, setUser] = useState({
        admin: 'unselected',
        username: '',
        password: '',
        passwordConfirm: '',
        age: '',
        gender: '',
        sleep_disorder: '',
        occupation: '',
    })

    function handleChange({ target: { name, value } }) {
        let valueCopy = value
        // Converts string value from form to a boolean
        if (name === 'admin') {
            valueCopy = value === 'true'
        }
        setUser((previousUser) => ({
            ...previousUser,
            [name]: valueCopy,
        }))
    }

    const submitUser = useCallback(async (user) => {
        const abortController = new AbortController()

        if (user.password !== user.passwordConfirm) {
            setError({ message: 'Passwords do not match' })
        } else if (user.admin === "unselected") {
            setError({ message: 'Please select type of account'})
        } else {
            try {
                const response = await createUser(user, abortController.signal)

                await userLogin(
                    user.username,
                    user.password,
                    abortController.signal
                )

                return response
            } catch (error) {
                setError(error)
            } finally {
                abortController.abort()
            }
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
                        <select
                            className="relative border-0 bg-slate-100 my-4 py-3 px-2 w-full rounded max-w-2xl text-accent-1"
                            name="admin"
                            id="admin"
                            required={true}
                            onChange={handleChange}
                        >
                            <option value="unselected">
                                Select Type of Account
                            </option>
                            <option value="true">Admin</option>
                            <option value="false">User</option>
                        </select>
                        {/* Username input */}
                        <input
                            className="relative border-0 bg-slate-100 my-4 py-3 px-2 w-full rounded max-w-2xl"
                            type="text"
                            id="username"
                            name="username"
                            required={true}
                            value={user.username}
                            placeholder="Enter Username"
                            onChange={handleChange}
                        />
                        {/* Password input */}
                        <input
                            className="relative border-0 bg-slate-100 my-4 py-3 px-2 w-full rounded max-w-2xl"
                            type="password"
                            id="password"
                            name="password"
                            required={true}
                            value={user.password}
                            placeholder="Password"
                            onChange={handleChange}
                        />
                        {/* Confirm password */}
                        <input
                            className="relative border-0 bg-slate-100 my-4 py-3 px-2 w-full rounded max-w-2xl"
                            type="password"
                            id="passwordConfim"
                            name="passwordConfirm"
                            required={true}
                            value={user.passwordConfirm}
                            placeholder="Confirm Password"
                            onChange={handleChange}
                        />
                        {/* Age input */}
                        <input
                            type="number"
                            name="age"
                            id="age"
                            value={user.age}
                            onChange={handleChange}
                            placeholder="Age"
                            required={true}
                            step="1"
                            min="0"
                            max="200"
                            className="relative border-0 bg-slate-100 my-4 py-3 px-2 w-full rounded max-w-2xl"
                        />
                        {/* Gender input */}
                        <select
                            name="gender"
                            id="gender"
                            required={true}
                            value={user.gender}
                            onChange={handleChange}
                            className="relative border-0 bg-slate-100 my-4 py-3 px-2 w-full rounded max-w-2xl text-accent-1"
                        >
                            <option className="" value="/">
                                Gender
                            </option>
                            <option value="Male">Male</option>
                            <option value="Female">Female</option>
                        </select>
                        {/* Sleep disorder input */}
                        <select
                            name="sleep_disorder"
                            id="sleep_disorder"
                            required={true}
                            value={user.sleep_disorder}
                            onChange={handleChange}
                            className="relative border-0 bg-slate-100 my-4 py-3 px-2 w-full rounded max-w-2xl text-accent-1"
                        >
                            <option value="">Sleep Disorder</option>
                            <option value="None">None</option>
                            <option value="Insomnia">Insomnia</option>
                            <option value="Sleep Apnea">Sleep Apnea</option>
                        </select>
                        {/* Occupation input */}
                        <input
                            type="string"
                            id="occupation"
                            name="occupation"
                            required={true}
                            value={user.occupation}
                            placeholder="Occupation"
                            onChange={handleChange}
                            className="relative border-0 bg-slate-100 my-4 py-3 px-2 w-full rounded max-w-2xl"
                        />
                        {/* Register button */}
                        <ErrorAlert error={error} />
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
