import React from 'react'
import { Table } from 'flowbite-react'
import UserActivitiesList from './UserActivitiesList'

export default function UserRecordsTable({ userId, entries, setEntries }) {
    return (
        <>
            <div className="overflow-x-auto max-h-96 md:max-h-full overflow-y-auto">
                <Table hoverable>
                    <Table.Head className="sticky top-0 bg-white z-10">
                        <Table.HeadCell>Date</Table.HeadCell>
                        <Table.HeadCell>Steps</Table.HeadCell>
                        <Table.HeadCell>Heart Rate</Table.HeadCell>
                        <Table.HeadCell>BMI Category</Table.HeadCell>
                        <Table.HeadCell>Stress Level</Table.HeadCell>
                        <Table.HeadCell>Sleep Hours</Table.HeadCell>
                        <Table.HeadCell>
                            <span className="sr-only">X</span>
                        </Table.HeadCell>
                    </Table.Head>
                    <Table.Body className="divide-y">
                        <UserActivitiesList
                            userId={userId}
                            entries={entries}
                            setEntries={setEntries}
                        />
                    </Table.Body>
                </Table>
            </div>
        </>
    )
}
