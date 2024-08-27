import React from 'react'
import Spinner from '../../utils/Spinner'
import { Table } from 'flowbite-react'
import ActivityCard from './ActivityCard'

export default function UserActivitiesList({ userId, entries, setEntries, openModal }) {

    if (entries) {
        return (
            <>
                {entries.map((entry) => (
                    <Table.Row
                        className="text-center bg-white dark:border-gray-700 dark:bg-gray-800 snap-start"
                        key={entry.entry_id}
                    >
                        <ActivityCard
                            entry={entry}
                            setEntries={setEntries}
                            userId={userId}
                            openModal={openModal}
                        />
                    </Table.Row>
                ))}
            </>
        )
    } else {
        return (
            <Table.Row>
                <Table.Cell colSpan="8" className="h-80 p-0">
                    <div className="flex items-center justify-center h-full">
                        <Spinner />
                    </div>
                </Table.Cell>
            </Table.Row>
        )
    }
}
