import React from 'react'
import Spinner from '../../utils/Spinner'
import { Table } from 'flowbite-react'
import EmployeeCardNew from './EmployeeCardNew'

export default function EmployeesList({ employees, setEmployees, openModal }) {
    if (employees) {
        return (
            <>
                {employees.map((employee) => (
                    <Table.Row
                        className="bg-white dark:border-gray-700 dark:bg-gray-800"
                        key={employee.person_id}
                    >
                        <EmployeeCardNew
                            openModal={openModal}
                            employee={employee}
                            setEmployees={setEmployees}
                            imgNumber={employee.person_id}
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
