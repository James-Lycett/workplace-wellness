import React, { useState } from 'react'
import { readEntriesByPerson, deleteEntry } from '../../utils/api'
import RemoveCardButton from '../../utils/RemoveCardButton'
import { Table } from 'flowbite-react'
import moment from 'moment'


export default function ActivityCard({ entry, userId, setEntries, openModal }) {
    const [openDeleteModal, setOpenDeleteModal] = useState(false)

    async function handleDelete() {
        const abortController = new AbortController()

        try {
            await deleteEntry(entry.entry_id, abortController.signal)
        } catch (error) {
            console.error(error)
        } finally {
            setOpenDeleteModal(false)
            const newEntries = await readEntriesByPerson(userId)
            setEntries(newEntries)

        }
        return () => abortController.abort()
    }

    return (
        <>
            <Table.Cell id="date">{moment(entry.date).format("L")}</Table.Cell>
            <Table.Cell id="steps">{entry.daily_steps}</Table.Cell>
            <Table.Cell id="stress-lvl">{entry.heart_rate}</Table.Cell>
            <Table.Cell id="bmi">{entry.bmi_category}</Table.Cell>
            <Table.Cell id="stress-lvl">{entry.stress_level}</Table.Cell>
            <Table.Cell id="sleep-hours">{entry.sleep_duration}</Table.Cell>
            <Table.Cell>
                <button
                    onClick={() => openModal('editActivity', null, null, null, entry)}
                    className="font-medium text-cyan-600 hover:underline dark:text-cyan-500"
                >
                    Edit
                </button>
            </Table.Cell>
            <Table.Cell>
                <RemoveCardButton
                    openModal={openDeleteModal}
                    setOpenModal={setOpenDeleteModal}
                    handleDelete={handleDelete}
                    option={'entry'}
                />
            </Table.Cell>
        </>
    )
}
