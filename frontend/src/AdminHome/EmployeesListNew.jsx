import React, { useState, useCallback, useEffect } from 'react'
import Spinner from '../utils/Spinner'
import { listUsers } from '../utils/api'
import { Table } from 'flowbite-react'
import EmployeeCardNew from './EmployeeCardNew'

export default function EmployeesList() {
    const [employees, setEmployees] = useState(null)
    const [error, setError] = useState(null)

    // Fetches all users from the API
    const loadUsers = useCallback(async () => {
        const abortController = new AbortController()

        try {
            const response = await listUsers(abortController.signal)
            setEmployees(response)
        } catch (error) {
            setError(error)
        } finally {
            abortController.abort()
        }
    }, [])

    useEffect(() => {
        loadUsers()
    }, [loadUsers])

    if (employees) {
        return (
            <>
                {employees.map((employee) => (
                    <Table.Row
                        className="flex items-center bg-white dark:border-gray-700 dark:bg-gray-800"
                        key={employee.person_id}
                    >
                        <EmployeeCardNew
                            employee={employee}
                            setError={setError}
                            loadUsers={loadUsers}
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
