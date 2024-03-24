import React, { useState } from "react";
import { FaEyeSlash, FaEye } from "react-icons/fa6";
import { deleteEntry } from "../utils/api";
import RemoveCardButton from "../utils/RemoveCardButton"
import meterImageGood from "./good.jpg"
import meterImageBad from "./bad.jpg"
import meterImageOk from "./ok.jpg"
import moment from "moment";


export default function EntryCard({ entry, loadEntries }) {
    const [hidden, setHidden] = useState(false)
    const [openModal, setOpenModal] = useState(false)
    const { date } = entry
    const formattedDate = moment(date).format("dddd, MMMM Do YYYY")


    // RemoveEntryButton functionality, deletes entry
    async function handleDelete() {
        const abortController = new AbortController()
    
        try {
            await deleteEntry(entry.entry_id, abortController.signal)
        } catch (er) {
            console.error(er)
        } finally {
            setOpenModal(false)
            loadEntries()
            abortController.abort()
        }
    }

    // Hides this card
    const toggleVisibility = () => {
        hidden ? setHidden(false) : setHidden(true)
    }

    let imgSource = meterImageOk
    if (entry.sleep_duration >= 7.66) {
        imgSource = meterImageGood
    } else if (entry.sleep_duration < 7) {
        imgSource = meterImageBad
    }

    if (hidden) {
        return (
            <>
            <div className="flex justify-between p-2 my-2 hover:bg-gray-100">
                <h3 className="font-bold">{formattedDate}</h3>
                <button onClick={toggleVisibility} className="text-lg"><FaEye /></button>
            </div>
            </>
        )
    } else {
        return (
            <>
            <div className="flex relative border w-auto p-2 my-2 mx-1 hover:bg-gray-100">
                <div className="flex-none w-32">
                    <img src={imgSource} style={{ width: "100px"}} alt="sleeping person"></img>
                </div>
                <div className="flex-auto w-64">
                    <h3 className="font-bold rounded-sm bg-slate-100 ps-1">{formattedDate}</h3>
                    <h4>Sleep Hours: {entry.sleep_duration}</h4>
                    <h4>BMI Category: {entry.bmi_category}</h4>
                    <h4>Steps: {entry.daily_steps}</h4>
                    <h4>Stress Level: {entry.stress_level}</h4>
                    <h4>Heart Rate: {entry.heart_rate}</h4>
                </div>
                <div className="flex flex-col justify-around text-xl">
                    <RemoveCardButton openModal={openModal} setOpenModal={setOpenModal} handleDelete={handleDelete} entry={entry} loadEntries={loadEntries} option={"entry"}/>
                    <button onClick={toggleVisibility} ><FaEyeSlash /></button>
                </div>
            </div>
            </>
        )
    }
}