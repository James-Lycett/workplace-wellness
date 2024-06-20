import React, { useState, useEffect } from 'react'
import { Table } from 'flowbite-react'
import EmployeesListNew from './EmployeesListNew'
import SearchBar from './SearchBar'

export default function AdminEmployeesTable({ employees, openModal }) {
    const [filteredEmployees, setFilteredEmployees] = useState(null)

    // Create a copy of employees array to mutate leaving original employees array untouched
    useEffect(() => {
        setFilteredEmployees(employees)
    }, [employees])

    return (
        <>
            <div className="overflow-x-auto max-h-96 md:max-h-full md:w-full overflow-y-auto">
                <Table hoverable>
                    <Table.Head>
                        <Table.HeadCell colSpan={6}>
                            <SearchBar
                                employees={employees}
                                setFilteredEmployees={setFilteredEmployees}
                            />
                        </Table.HeadCell>
                    </Table.Head>
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
                            employees={filteredEmployees}
                            setEmployees={setFilteredEmployees}
                        />
                    </Table.Body>
                </Table>
            </div>
        </>
    )
}
