import React, { useState } from 'react'
import { readEntriesByPerson } from '../../utils/api'
import RemoveCardButton from '../../utils/RemoveCardButton'
import { Checkbox, Table } from 'flowbite-react'

export default function ActivityCard({
    setError,
    entry
}) {
    const [openModal, setOpenModal] = useState(false)

    
    // RemoveEmployeeButton functionality, deletes employee
    async function handleDelete() {
        const abortController = new AbortController()

        try {
            //await deleteUser(employee.person_id, abortController.signal)
            console.log("delete")
        } catch (er) {
            setError(er)
        } finally {
            setOpenModal(false)
            //readEntriesByPerson(userId)
        }
        return () => abortController.abort()
    }
    

    return (
        <>
            <Table.Cell>
                <Checkbox />
            </Table.Cell>
            <Table.Cell
                id="user"
                className="flex justify-start items-center whitespace-nowrap font-medium text-gray-900 dark:text-white"
            >
            </Table.Cell>
            <Table.Cell id="steps">{entry.daily_steps}</Table.Cell>
            <Table.Cell id="stress-lvl">{entry.heart_rate}</Table.Cell>
            <Table.Cell id="bmi">{entry.bmi_category}</Table.Cell>
            <Table.Cell id="stress-lvl">{entry.stress_level}</Table.Cell>
            <Table.Cell id="sleep-hours">{entry.sleep_duration}</Table.Cell>
            <Table.Cell>
                <a
                    href="#"
                    className="font-medium text-cyan-600 hover:underline dark:text-cyan-500"
                >
                    Edit
                </a>
            </Table.Cell>
            <Table.Cell>
                <RemoveCardButton
                    openModal={openModal}
                    setOpenModal={setOpenModal}
                    handleDelete={handleDelete}
                    option={'employee'}
                />
            </Table.Cell>
        </>
    )
}
