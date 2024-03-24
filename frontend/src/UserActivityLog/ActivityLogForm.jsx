import React from 'react'

export default function ActivityLogForm({ entry, handleChange, handleSubmit }) {
    return (
        <div className="text-2xl text-primary-1">
            <form onSubmit={handleSubmit}>
                <div className="flex justify-between my-1 h-9">
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
                        className="border-2 rounded-md w-1/2"
                    />
                </div>
                <div className="flex justify-between my-1 h-9">
                    <label htmlFor="bmi_category">BMI *</label>
                    <select
                        id="bmi_category"
                        name="bmi_category"
                        className="border-2 rounded-md w-1/2 text-s py-1 "
                    >
                        <option value={'Normal'}>Normal</option>
                        <option value={'Underweight'}>Underweight</option>
                        <option value={'Overweight'}>Overweight</option>
                    </select>
                </div>
                <div className="flex justify-between my-1 h-9">
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
                        className="border-2 rounded-md w-1/2"
                    />
                </div>
                <div className="flex justify-between my-1 h-9">
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
                        className="border-2 rounded-md w-1/2"
                    />
                </div>
                <div className="flex justify-between my-1 h-9">
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
                        className="border-2 rounded-md w-1/2"
                    />
                </div>
                <div className="my-3 text-lg">
                    <small>* Required Entry</small>
                </div>
                <div className="flex flex-row gap-2 my-2">
                    <button
                        onSubmit={handleSubmit}
                        type="submit"
                        className="button-white-rounded font-bold mt-3 w-1/2"
                    >
                        SUBMIT
                    </button>
                    <div className="w-1/2"></div>
                </div>
            </form>
        </div>
    )
}

/* 
                    <input
                        type="number"
                        name="bmi"
                        id="bmi"
                        value={entry.bmi_category}
                        onChange={handleChange}
                        required={true}
                        step="1"
                        min="0"
                        max="100"
                        className="border-2 rounded-md w-1/2"
                    />
*/
