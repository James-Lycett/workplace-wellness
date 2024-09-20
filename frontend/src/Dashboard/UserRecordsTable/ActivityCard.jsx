import React, { useContext, useState } from 'react'
import { readEntriesByPerson, deleteEntry } from '../../utils/api'
import RemoveCardButton from '../../utils/RemoveCardButton'
import { Table } from 'flowbite-react'
import moment from 'moment'
import { EntryContext, LoadDataContext } from '../../utils/contexts'
import NewModal from '../Modal/newModal'
import EditActivityForm from './EditActivityForm'



export default function ActivityCard({ entry }) {
    const [isModalOpen, setIsModalOpen] = useState(false)
    const [openDeleteModal, setOpenDeleteModal] = useState(false)
    const { setEntries } = useContext(EntryContext)
    const { userId } = useContext(LoadDataContext)

    const openModal = () => {
        setIsModalOpen(true)
    }

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
                    onClick={() => openModal()}
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
            <EntryContext.Provider value={entry}>
                {isModalOpen && <NewModal setIsModalOpen={setIsModalOpen} title={'Edit Activity'} form={EditActivityForm}/>}
            </EntryContext.Provider>
        </>
    )
}
