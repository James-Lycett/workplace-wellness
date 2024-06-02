import React, { useState } from 'react'
import { readEntriesByPerson, deleteEntry } from '../../utils/api'
import RemoveCardButton from '../../utils/RemoveCardButton'
import { Checkbox, Table } from 'flowbite-react'
import moment from 'moment'


export default function ActivityCard({ setError, entry, userId, setEntries }) {
    const [openModal, setOpenModal] = useState(false)

    async function handleDelete() {
        const abortController = new AbortController()

        try {
            await deleteEntry(entry.entry_id, abortController.signal)
        } catch (er) {
            setError(er)
        } finally {
            setOpenModal(false)
            const newEntries = await readEntriesByPerson(userId)
            setEntries(newEntries)

        }
        return () => abortController.abort()
    }

    return (
        <>
            <Table.Cell>
                <Checkbox />
            </Table.Cell>
            <Table.Cell id="date">{moment(entry.date).format("L")}</Table.Cell>
            <Table.Cell id="steps">{entry.daily_steps}</Table.Cell>
            <Table.Cell id="stress-lvl">{entry.heart_rate}</Table.Cell>
            <Table.Cell id="bmi">{entry.bmi_category}</Table.Cell>
            <Table.Cell id="stress-lvl">{entry.stress_level}</Table.Cell>
            <Table.Cell id="sleep-hours">{entry.sleep_duration}</Table.Cell>
            <Table.Cell>
                <RemoveCardButton
                    openModal={openModal}
                    setOpenModal={setOpenModal}
                    handleDelete={handleDelete}
                    option={'entry'}
                />
            </Table.Cell>
        </>
    )
}
