import React, { useState } from "react"

export default function RegisterForm() {
    const [formData, setFormData] = useState({
        age: "",
        gender: "",
        height: "",
        weight: "",
        sleepDisorder: "",
        occupation: "",
    })

    const handleInputChange = (e) => {
        const { name, value } = e.target
        setFormData({ ...formData, [name]: value })
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        // Here you can perform any additional validation
        console.log("Creating user account:", formData)
        // You can add code here to submit the form data to a server
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
                    <div className="flex flex-col items-center justify-between">
                        {/* Age & gender */}
                        <div className="flex items-center justify-between mt-2 mb-1 py-3 w-full md:text-left">
                            {/* Age input */}
                            <div
                                className="relative mr-3 py-2 px-2 w-1/2 rounded border-2"
                                data-te-input-wrapper-init
                            >
                                <label htmlFor="age"></label>
                                <input
                                    type="string"
                                    id="age"
                                    name="age"
                                    value={formData.age}
                                    placeholder="Age"
                                    onChange={handleInputChange}
                                    min="10"
                                    max="99"
                                />
                            </div>
                            {/* Select gender */}
                            <div
                                className="relative py-2 px-2 w-full rounded border-2"
                                data-te-input-wrapper-init
                            >
                                <label
                                    htmlFor="gender"
                                    onChange={handleInputChange}
                                ></label>
                                <select
                                    name="dropdown"
                                    id="gender"
                                    value={formData.gender}
                                >
                                    <option value="/">Gender</option>
                                    <option value="male">Male</option>
                                    <option value="female">Female</option>
                                </select>
                            </div>
                        </div>
                        {/* height & weight */}
                        <div className="flex items-center justify-between mb-3 w-full py-3 text-center md:text-left">
                            {/* Height input */}
                            <div
                                className="relative mr-3 py-2 px-2 w-full rounded border-2"
                                data-te-input-wrapper-init
                            >
                                <label htmlFor="height"></label>
                                <input
                                    type="string"
                                    id="height"
                                    name="height"
                                    value={formData.height}
                                    placeholder="Height (feet)"
                                    onChange={handleInputChange}
                                    min="3"
                                    max="8"
                                    step="0.1"
                                />
                            </div>
                            {/* Weight input */}
                            <div
                                className="relative py-2 px-2 w-full rounded border-2"
                                data-te-input-wrapper-init
                            >
                                <label htmlFor="weight"></label>
                                <input
                                    type="string"
                                    id="weight"
                                    name="weight"
                                    value={formData.weight}
                                    placeholder="Weight (lb)"
                                    onChange={handleInputChange}
                                    min="50"
                                    max="300"
                                />
                            </div>
                        </div>
                        {/* Select sleep disorder */}
                        <div
                            className="relative mb-6 py-3 w-full rounded border-2"
                            data-te-input-wrapper-init
                        >
                            <label
                                htmlFor="sleep-disorder"
                                onChange={handleInputChange}
                            ></label>
                            <select
                                name="dropdown"
                                id="sleep-disorder"
                                value={formData.gender}
                            >
                                <option value="">Sleep Disorder</option>
                                <option value="none">None</option>
                                <option value="insomnia">Insomnia</option>
                                <option value="sleep-apnea">Sleep Apnea</option>
                            </select>
                        </div>
                        {/* Occupation input or select? */}
                        <div
                            class="relative mb-6 py-2 px-2 w-full rounded border-2"
                            data-te-input-wrapper-init
                        >
                            <label htmlFor="occupation"></label>
                            <input
                                type="string"
                                id="occupation"
                                name="occupation"
                                value={formData.occupation}
                                placeholder="Occupation"
                                onChange={handleInputChange}
                            />
                        </div>
                        <button
                            type="submit"
                            className="button-dark-rounded w-full mx-20"
                        >
                            <a href="/user/:userId/home">REGISTER</a>
                        </button>
                    </div>
                </form>
            </div>
        </div>
    )
}
