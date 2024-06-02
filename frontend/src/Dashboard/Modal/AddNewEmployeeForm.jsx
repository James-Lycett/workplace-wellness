import React from 'react'

export default function AddNewEmployeeForm({
    employee,
    handleChange,
    handleSubmit,
}) {
    /*
        const [employee, setEmployee] = useState({
        age: "",
        gender: "",
        height: "",
        weight: "",
        sleepDisorder: "",
        occupation: "",
    })
    */
    return (
        <div className="text-xl">
            <form onSubmit={handleSubmit} className="flex flex-col">
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
                    <select name="dropdown" id="gender" value={employee.gender} className="relative border-0 bg-slate-100 my-4 md:px-2 w-1/2 rounded max-w-xl py-1.5">
                        <option value="/">Gender</option>
                        <option value="male">Male</option>
                        <option value="female">Female</option>
                    </select>
                </div>
                <div className="flex items-center justify-between my-2 h-10">
                    <label htmlFor="height">Height *</label>
                    <input
                        type="string"
                        id="height"
                        name="height"
                        value={employee.height}
                        placeholder="Height (feet)"
                        onChange={handleChange}
                        min="3"
                        max="8"
                        step="0.1"
                        className="relative border-0 bg-slate-100 my-4 md:px-2 w-1/2 rounded max-w-xl py-1.5"
                    />
                </div>
                <div className="flex items-center justify-between my-2 h-10">
                    <label htmlFor="weight">Weight *</label>
                    <input
                        type="string"
                        id="weight"
                        name="weight"
                        value={employee.weight}
                        placeholder="Weight (lb)"
                        onChange={handleChange}
                        min="50"
                        max="800"
                        step="1"
                        className="relative border-0 bg-slate-100 my-4 md:px-2 w-1/2 rounded max-w-xl py-1.5"
                    />
                </div>
                <div className="flex items-center justify-between my-2 h-10">
                    <label
                        htmlFor="sleep-disorder"
                        onChange={handleChange}
                    >
                        Sleep Disorder *
                    </label>
                    <select
                        name="dropdown"
                        id="sleep-disorder"
                        value={employee.gender}
                        className="relative border-0 bg-slate-100 my-4 md:px-2 w-1/2 rounded max-w-xl py-1.5"
                    >
                        <option value="">Sleep Disorder</option>
                        <option value="none">None</option>
                        <option value="insomnia">Insomnia</option>
                        <option value="sleep-apnea">Sleep Apnea</option>
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
