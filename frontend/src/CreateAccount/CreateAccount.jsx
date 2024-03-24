
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
    //const [formProgress, setFormProgress] = useState(1)

    function handleChange({ target: { name, value } }) {
        if (name === 'dropdown') {
            setUserType(value)
            setUser((previousUser) => ({
                ...previousUser,
                admin: value === 'admin' ? true : false,
            }))
            //setFormProgress(1)
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
        [user]
    )

    /*
    const handleContinue = () => {
        setFormProgress(2)
    }

    const handleBack = () => {
        setFormProgress(1)
    }
    */

    const handleSubmit = async (e) => {
        e.preventDefault()

        try {
            const response = await submitUser(user)

            if (userType === 'admin') {
                // If admin is selected, navigate to Create admin account page
                navigate(`/admin/${response.person_id}/home`)
            } else {
                // Navigate to Create user account page
                navigate(`/user/${response.person_id}/home`)
            }
        } catch (error) {
            console.error(error)
        }
    }

    // Form field conditional renders
    let eidField = ""
    if (userType === "admin") {
        eidField = (
            <>
                <label htmlFor="ein"></label>
                <input
                    className="relative my-2 py-2 px-2 w-full rounded border-2"
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
            <h1 className="mt-8 text-3xl font-bold">
                You"re On the Journey to Better Mental Health
            </h1>
            <div
                className="mt-5 mb-2 block w-1/2 rounded border-2 border-black px-6 pb-[6px] pt-2 text-s font-medium leading-normal text-primary"
                data-te-ripple-init
            >
                <form onSubmit={handleSubmit}>
                    <div className="flex flex-col items-center justify-center">
                        {/* Select user type */}
                            <label htmlFor="userType"></label>
                            <select
                            className=" mt-8 mb-2 py-2 w-full rounded border-2"
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
                                className="relative my-2 py-2 px-2 w-full rounded border-2"
                                type="text"
                                id="username"
                                name="username"
                                required={true}
                                value={user.username}
                                placeholder={userType === 'user' || userType === 'unselected' ? "Enter Username" : "Legal First and Last Name"}
                                onChange={handleChange}
                            />
                            {eidField}
                        {/* Password input */}
                            <label htmlFor="password"></label>
                            <input
                            className="relative my-2 py-2 px-2 w-full rounded border-2"
                                type="password"
                                id="password"
                                name="password"
                                value={password}
                                placeholder={userType === 'admin' ? "Location Password" : "Password"}
                                onChange={handleChange}
                            />
                        {
                            (userType === 'user') &&
                            <>
                            <label htmlFor="confirm-password"></label>
                            <input
                                className="relative my-2 py-2 px-2 w-full rounded border-2"
                                type="password"
                                id="confirm-password"
                                name="confirm-password"
                                value={passwordConfirm}
                                placeholder={"Confirm Password"}
                                onChange={handleChange}
                            />
                            </>
                        }
                        {/* Register button */}
                            <div className="flex flex-col items-center justify-center w-3/4">
                                <button
                                    type="submit"
                                    className="button-dark-rounded mt-2 w-1/2"
                                >
                                    REGISTER
                                </button>
                            </div>
                        <p>
                            <a href="/login" className="underline">
                                Sign In
                            </a>
                        </p>
                    </div>
                </form>
            </div>
        </div>
    )
}
