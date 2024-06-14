import React from 'react'
import { Table, Checkbox } from 'flowbite-react'
import EmployeesListNew from './EmployeesListNew'

export default function AdminEmployeesTable({
    employees,
    setEmployees,
    openModal,
}) {
    return (
        <>
            <div className="overflow-x-auto max-h-96 md:max-h-full overflow-y-auto">
                <Table hoverable>
                    <Table.Head className="sticky top-0 bg-white z-10">
                        <Table.HeadCell>User</Table.HeadCell>
                        <Table.HeadCell>Age</Table.HeadCell>
                        <Table.HeadCell>Occupation</Table.HeadCell>
                        <Table.HeadCell>Sleep Disorder</Table.HeadCell>
                        <Table.HeadCell>
                            <span className="sr-only">Edit</span>
                        </Table.HeadCell>
                        <Table.HeadCell>
                            <span className="sr-only">X</span>
                        </Table.HeadCell>
                    </Table.Head>
                    <Table.Body className="divide-y">
                        <EmployeesListNew
                            openModal={openModal}
                            employees={employees}
                            setEmployees={setEmployees}
                        />
                    </Table.Body>
                </Table>
            </div>
        </>
    )
}
