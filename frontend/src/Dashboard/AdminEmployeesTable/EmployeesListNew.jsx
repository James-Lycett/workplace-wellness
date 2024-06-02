import React from 'react'
import Spinner from '../../utils/Spinner'
import { Table } from 'flowbite-react'
import EmployeeCardNew from './EmployeeCardNew'

export default function EmployeesList({ employees, setEmployees }) {
    if (employees) {
        return (
            <>
                {employees.map((employee) => (
                    <Table.Row
                        className="bg-white dark:border-gray-700 dark:bg-gray-800"
                        key={employee.person_id}
                    >
                        <EmployeeCardNew
                            employee={employee}
                            setEmployees={setEmployees}
                            imgNumber={employee.person_id}
                        />
                    </Table.Row>
                ))}
            </>
        )
    } else {
        return <Spinner />
    }
}
