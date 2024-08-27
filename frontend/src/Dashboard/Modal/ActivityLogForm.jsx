import React from 'react'
import ErrorAlert from '../../utils/ErrorAlert'

export default function ActivityLogForm({
    entry,
    handleChange,
    handleSubmit,
    error,
}) {
    console.log("entry at ActivityLogForm", entry)
    return (
        <div className="text-xl">
            <form onSubmit={handleSubmit} className="flex flex-col">
                <div className="flex items-center justify-between my-2 h-10">
                    <label htmlFor="date">Date *</label>
                    <input
                        type="date"
                        name="date"
                        id="date"
                        value={entry.date}
                        onChange={handleChange}
                        required={true}
                        className="relative border-0 bg-slate-100 my-4 md:px-2 w-1/2 rounded max-w-xl"
                    />
                </div>
                <div className="flex items-center justify-between my-2 h-10">
                    <label htmlFor="sleep_duration">
                        Sleep Duration &#40;Hours&#41; *
                    </label>
                    <input
                        type="number"
                        name="sleep_duration"
                        id="sleep_duration"
                        value={entry.sleep_duration}
                        onChange={handleChange}
                        required={true}
                        step=".5"
                        min="0"
                        max="24"
                        className="relative border-0 bg-slate-100 my-4 md:px-2 w-1/2 rounded max-w-xl"
                    />
                </div>
                <div className="flex items-center justify-between my-2 h-10">
                    <label htmlFor="bmi_category">BMI *</label>
                    <select
                        id="bmi_category"
                        name="bmi_category"
                        className="relative border-0 bg-slate-100 my-4 md:px-2 w-1/2 rounded max-w-xl"
                    >
                        <option value={'Normal'}>Normal</option>
                        <option value={'Underweight'}>Underweight</option>
                        <option value={'Overweight'}>Overweight</option>
                    </select>
                </div>
                <div className="flex items-center justify-between my-2 h-10">
                    <label htmlFor="daily_steps">Steps*</label>
                    <input
                        type="number"
                        name="daily_steps"
                        id="daily_steps"
                        value={entry.daily_steps}
                        onChange={handleChange}
                        required={true}
                        min="0"
                        max="100000"
                        className="relative border-0 bg-slate-100 my-4 md:px-2 w-1/2 rounded max-w-xl"
                    />
                </div>
                <div className="flex items-center justify-between my-2 h-10">
                    <label htmlFor="stress_level">
                        Stress Level &#40;1-10&#41;
                    </label>
                    <input
                        type="number"
                        name="stress_level"
                        id="stress_level"
                        value={entry.stress_level}
                        onChange={handleChange}
                        min="1"
                        max="10"
                        className="relative border-0 bg-slate-100 my-4 md:px-2 w-1/2 rounded max-w-xl"
                    />
                </div>
                <div className="flex items-center justify-between my-2 h-10">
                    <label htmlFor="heart_rate">Heart Rate *</label>
                    <input
                        type="number"
                        name="heart_rate"
                        id="heart_rate"
                        value={entry.heart_rate}
                        onChange={handleChange}
                        required={true}
                        min="20"
                        max="600"
                        className="relative border-0 bg-slate-100 my-4 md:px-2 w-1/2 rounded max-w-xl"
                    />
                </div>
                <div className="my-3 text-lg">
                    <small>* Required Entry</small>
                </div>
                <ErrorAlert error={error} />
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
