import React, { useState, useCallback, useEffect } from 'react'
import Spinner from '../utils/Spinner'
import { listUsers } from '../utils/api'
import EmployeeCard from './EmployeeCard'

export default function EmployeesListNew() {
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
            <ul>
                {employees.map((employee) => (
                    <li key={employee.person_id}>
                        <EmployeeCard
                            employee={employee}
                            setError={setError}
                            loadUsers={loadUsers}
                            imgNumber={employee.person_id}
                        />
                    </li>
                ))}
            </ul>
        )
    } else {
        return <Spinner />
    }
}
