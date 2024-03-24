import React, { useState } from "react"
// import { Link, useNavigate } from "react-router-dom";

export default function CreateAdminAccount() {
    let admin
    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")

    const handleUsernameChange = (e) => {
        setUsername(e.target.value)
    }

    const handlePasswordChange = (e) => {
        setPassword(e.target.value)
    }

    const handleSubmit = (e) => {
        e.preventDefault()
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
                        {/* Admin selected */}
                        <div
                            className="relative mt-6 mb-2 py-2 px-2 w-full rounded border-2"
                            data-te-input-wrapper-init
                        >
                            <label htmlFor="admin"></label>
                            <input
                                type="string"
                                id="admin"
                                value={admin}
                                placeholder="Admin"
                            />
                        </div>
                        {/* Username input */}
                        <div
                            className="relative mt-6 mb-8 py-2 px-2 w-full rounded border-2"
                            data-te-input-wrapper-init
                        >
                            <label htmlFor="username"></label>
                            <input
                                type="string"
                                id="username"
                                value={username}
                                placeholder="Enter Username"
                                onChange={handleUsernameChange}
                            />
                        </div>
                        {/* Password input */}
                        <div
                            class="relative mb-8 py-2 px-2 w-full rounded border-2"
                            data-te-input-wrapper-init
                        >
                            <label htmlFor="password"></label>
                            <input
                                type="string"
                                id="password"
                                value={password}
                                placeholder="Password"
                                onChange={handlePasswordChange}
                            />
                        </div>
                        <div
                            class="relative mb-6 py-2 px-2 w-full rounded border-2"
                            data-te-input-wrapper-init
                        >
                            <label htmlFor="password"></label>
                            <input
                                type="string"
                                id="password"
                                value={password}
                                placeholder="Confirm Password"
                                onChange={handlePasswordChange}
                            />
                        </div>
                        {/* Register button */}
                        <div className="flex flex-col items-center justify-center">
                            <button
                                type="submit"
                                className="button-dark-rounded w-full mx-20"
                            >
                                <a href="/admin/home">REGISTER</a>
                            </button>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    )
}

// import React, { useState } from "react";
// import { Link, useNavigate } from "react-router-dom";
// import Footer from "../utils/Footer";

// export default function LoginPage() {
//     const [userFullname, setUserFullname] = useState("");
//     const [username, setUsername] = useState("");
//     const [sleepDisorder, setSleepDisorder] = useState("");
//     const [occupation, setOccupation] = useState("");

//     const handleUserFullnameChange = (e) => {
//         setUserFullname(e.target.value);
//     }

//     const handleUsernameChange = (e) => {
//         setUsername(e.target.value);
//     }

//     const handleSleepDisorderChange = (e) => {
//         setSleepDisorder(e.target.value);
//     }

//     const handleOccupationChange = (e) => {
//         setOccupation(e.target.value);
//     }

//     const handleSubmit = (e) => {
//         e.preventDefault();
//     };

//     return (
//         <div className="flex flex-col items-center justify-center">
//             <h1 className="mt-8 text-3xl font-bold">You"re On the Journey to Better Mental Health</h1>
//             <div className="mt-5 mb-2 block w-1/2 rounded border-2 border-black px-6 pb-[6px] pt-2 text-s font-medium leading-normal text-primary"
//                 data-te-ripple-init>
//                 <form onSubmit={handleSubmit}>
//                     <div className="flex flex-col items-center justify-center">
//                         {/* Age input */}
//                         <div className="relative mt-6 mb-6 w-full rounded border-2" data-te-input-wrapper-init>
//                             <label htmlFor="age"></label>
//                             <input type="number" id="age" name="age" min="14" max="99" required placeholder="age" onChange={handleUserAgeChange} />
//                         </div>
//                         {/* Username input */}
//                         <div className="relative mt-6 mb-6 w-full rounded border-2" data-te-input-wrapper-init>
//                             <label htmlFor="username"></label>
//                             <input type="text" id="username" value={username} placeholder="Enter Username" onChange={handleUsernameChange} />
//                         </div>
//                         {/* Sleep disorder type */}
//                         <div class="relative mb-6 w-full rounded border-2" data-te-input-wrapper-init>
//                             <label htmlFor="sleepDisorder" placeholder="Sleep Disorder" onChange={handleSleepDisorderChange}></label>
//                             <select name="dropdown" id="sleepDisorder" value={sleepDisorder}>
//                                 <option value="/">Sleep Disorder</option>
//                                 <option value="insomnia">Insomnia</option>
//                                 <option value="sleep_apnea">Sleep Apnea</option>
//                             </select>
//                         </div>
//                          {/* Occupation input */}
//                         <div class="relative mb-6 w-full rounded border-2" data-te-input-wrapper-init>
//                             <label htmlFor="occupation"></label>
//                             <input type="string" id="occupation" value={occupation} placeholder="Occupation" onChange={handleOccupationChange} />
//                         </div>
//                         {/* Register button */}
//                         <div className="flex flex-col items-center justify-center">
//                             <button
//                                 type="submit"
//                                 className="button-dark-rounded w-full mx-20"
//                             >
//                                 REGISTER
//                             </button>
//                         </div>
//                     </div>
//                 </form>
//             </div>

//             {/* Footer section */}
//             <div>
//                 <Footer />
//             </div>
//         </div>
//         )
//     }
