import React from 'react'

export default function AddNewEmployeeForm({
    employee,
    handleChange,
    handleSubmit,
}) {
    return (
        <div className="text-xl">
            <form onSubmit={handleSubmit} className="flex flex-col">
                <div className="flex items-center justify-between my-2 h-10">
                    <label htmlFor="admin">Account Type *</label>
                    <select
                        className="relative border-0 bg-slate-100 my-4 md:px-2 w-1/2 rounded max-w-xl py-1.5 text-xl text-accent-1"
                        name="admin"
                        id="admin"
                        onChange={handleChange}
                    >
                        <option value="unselected">
                            Select Type of Account
                        </option>
                        <option value="true">Admin</option>
                        <option value="false">User</option>
                    </select>
                </div>
                <div className="flex items-center justify-between my-2 h-10">
                    <label htmlFor="username">Username *</label>
                    <input
                        type="string"
                        id="username"
                        name="username"
                        value={employee.username}
                        placeholder="Username"
                        onChange={handleChange}
                        className="relative border-0 bg-slate-100 my-4 md:px-2 w-1/2 rounded max-w-xl py-1.5"
                    />
                </div>
                <div className="flex items-center justify-between my-2 h-10">
                    <label htmlFor="password">Password</label>
                    <input
                        type="password"
                        id="password"
                        name="password"
                        value={employee.password}
                        placeholder="Password"
                        onChange={handleChange}
                        className="relative border-0 bg-slate-100 my-4 md:px-2 w-1/2 rounded max-w-xl py-1.5"
                    />
                </div>
                <div className="flex items-center justify-between my-2 h-10">
                    <label htmlFor="age">Age *</label>
                    <input
                        type="number"
                        name="age"
                        id="age"
                        value={employee.age}
                        onChange={handleChange}
                        placeholder="Age"
                        required={true}
                        step="1"
                        min="0"
                        max="200"
                        className="relative border-0 bg-slate-100 my-4 md:px-2 w-1/2 rounded max-w-xl text-xl"
                    />
                </div>
                <div className="flex items-center justify-between my-2 h-10">
                    <label htmlFor="gender">Gender *</label>
                    <select
                        name="gender"
                        id="gender"
                        value={employee.gender}
                        onChange={handleChange}
                        className="relative border-0 bg-slate-100 my-4 md:px-2 w-1/2 rounded max-w-xl py-1.5 text-xl text-accent-1 "
                    >
                        <option className="" value="/">
                            Gender
                        </option>
                        <option value="Male">Male</option>
                        <option value="Female">Female</option>
                    </select>
                </div>
                <div className="flex items-center justify-between my-2 h-10">
                    <label htmlFor="sleep_disorder">Sleep Disorder *</label>
                    <select
                        name="sleep_disorder"
                        id="sleep_disorder"
                        value={employee.sleep_disorder}
                        onChange={handleChange}
                        className="relative border-0 bg-slate-100 my-4 md:px-2 w-1/2 rounded max-w-xl py-1.5 text-xl text-accent-1"
                    >
                        <option value="">Sleep Disorder</option>
                        <option value="None">None</option>
                        <option value="Insomnia">Insomnia</option>
                        <option value="Sleep Apnea">Sleep Apnea</option>
                    </select>
                </div>
                <div className="flex items-center justify-between my-2 h-10">
                    <label htmlFor="occupation">Occupation *</label>
                    <input
                        type="string"
                        id="occupation"
                        name="occupation"
                        value={employee.occupation}
                        placeholder="Occupation"
                        onChange={handleChange}
                        className="relative border-0 bg-slate-100 my-4 md:px-2 w-1/2 rounded max-w-xl py-1.5"
                    />
                </div>
                <div className="my-3 text-lg">
                    <small>* Required Entry</small>
                </div>
                <div className="flex flex-col items-center justify-center my-2 ">
                    <button
                        onSubmit={handleSubmit}
                        type="submit"
                        className="w-full max-w-52 text-xl mx-10 font-bold button-light-blue"
                    >
                        SUBMIT
                    </button>
                </div>
                <div className="flex flex-row gap-2 my-2">
                    <div className="w-1/2"></div>
                </div>
            </form>
        </div>
    )
}
