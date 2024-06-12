import React from 'react'
import { Table, Checkbox } from 'flowbite-react'
import EmployeesListNew from './EmployeesListNew'

export default function AdminEmployeesTable({ employees, setEmployees, openModal }) {
    return (
        <>
            <div className="overflow-auto">
                <Table hoverable>
                    <Table.Head className="sticky top-0 bg-white z-10">
                        <Table.HeadCell>
                            <Checkbox />
                        </Table.HeadCell>
                        <Table.HeadCell>User</Table.HeadCell>
                        <Table.HeadCell>Age</Table.HeadCell>
                        <Table.HeadCell>Stress Level</Table.HeadCell>
                        <Table.HeadCell>Sleep Hours</Table.HeadCell>
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
