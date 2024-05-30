import React, { useState, useCallback, useEffect } from 'react'
import Spinner from '../../utils/Spinner'
import { Table } from 'flowbite-react'
import ActivityCard from './ActivityCard'
import { readEntriesByPerson } from '../../utils/api'

export default function UserActivitiesList({ userId }) {
    const [entries, setEntries] = useState(null)
    const [error, setError] = useState(null)

    // Fetches all entries from the API
    const loadEntries = useCallback(async () => {
        const abortController = new AbortController()

        try {
            const response = await readEntriesByPerson(userId, abortController.signal)
            setEntries(response)
        } catch (error) {
            setError(error)
        } finally {
            abortController.abort()
        }
    }, [])

    useEffect(() => {
        loadEntries()
    }, [loadEntries])

    if (entries) {
        return (
            <>
                {entries.map((entry) => (
                    <Table.Row
                        className="bg-white dark:border-gray-700 dark:bg-gray-800"
                        key={entry.entry_id}
                    >
                        <ActivityCard entry={entry} setError={setError} userId={userId}/>
                    </Table.Row>
                ))}
            </>
        )
    } else {
        return <Spinner />
    }
}
