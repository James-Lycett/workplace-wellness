import React, { useContext, useState } from 'react'
import { Table } from 'flowbite-react'
import { HiChevronDown, HiChevronUp, HiSelector } from 'react-icons/hi'
import UserActivitiesList from './UserActivitiesList'
import { EntryContext } from '../../utils/contexts'

export default function UserRecordsTable() {
    const [sortConfig, setSortConfig] = useState({
        key: '',
        direction: 'descending',
    })
    const { entries } = useContext(EntryContext)

    /* 
        Click handler for sort buttons
        When button aria-label="Sort by" is clicked it sends its unique key (e.g., "date") to onSort which sets the
        sortConfig state with that key (aka "which column/property are we working with?") and
        toggles sort order (ascending/descending)
        Setting the sortConfig state triggers the sortedEntries callback to sort the entries according to the info in sortConfig state
    */
    const onSort = (key) => {
        let direction = 'descending'
        if (sortConfig.key === key && sortConfig.direction === 'descending') {
            direction = 'ascending'
        }
        setSortConfig({ key, direction })
    }

    const sortedEntries = React.useMemo(() => {
        if (sortConfig.key) {
            return [...entries].sort((a, b) => {
                if (a[sortConfig.key] < b[sortConfig.key]) {
                    return sortConfig.direction === 'ascending' ? -1 : 1
                }
                if (a[sortConfig.key] > b[sortConfig.key]) {
                    return sortConfig.direction === 'ascending' ? 1 : -1
                }
                return 0
            })
        }
        return entries
    }, [entries, sortConfig])

    const getSortIcon = (key) => {
        if (sortConfig.key !== key) {
            return <HiSelector />
        }
        return sortConfig.direction === 'ascending' ? (
            <HiChevronUp />
        ) : (
            <HiChevronDown />
        )
    }

    return (
        <>
            <div className="overflow-x-auto max-h-96 md:max-h-full overflow-y-auto snap-y snap-mandatory scroll-py-14">
                <Table hoverable>
                    <Table.Head className="sticky top-0 bg-white z-10">
                        <Table.HeadCell>
                            <button
                                aria-label="Sort by Date"
                                className="flex flex-row gap-1"
                                onClick={() => onSort('date')}
                            >
                                <p>DATE</p>
                                {getSortIcon('date')}
                            </button>
                        </Table.HeadCell>
                        <Table.HeadCell>
                            <button
                                aria-label="Sort by Steps"
                                className="flex flex-row gap-1"
                                onClick={() => onSort('daily_steps')}
                            >
                                <p>STEPS</p>
                                {getSortIcon('daily_steps')}
                            </button>
                        </Table.HeadCell>
                        <Table.HeadCell>
                            <button
                                aria-label="Sort by Heart Rate"
                                className="flex flex-row gap-1"
                                onClick={() => onSort('heart_rate')}
                            >
                                <p>HEART RATE</p>
                                {getSortIcon('heart_rate')}
                            </button>
                        </Table.HeadCell>
                        <Table.HeadCell>
                            <button
                                aria-label="Sort by BMI Category"
                                className="flex flex-row gap-1"
                                onClick={() => onSort('bmi_category')}
                            >
                                <p>BMI CATEGORY</p>
                                {getSortIcon('bmi_category')}
                            </button>
                        </Table.HeadCell>
                        <Table.HeadCell>
                            <button
                                aria-label="Sort by Stress Level"
                                className="flex flex-row gap-1"
                                onClick={() => onSort('stress_level')}
                            >
                                <p>STRESS LEVEL</p>
                                {getSortIcon('stress_level')}
                            </button>
                        </Table.HeadCell>
                        <Table.HeadCell>
                            <button
                                aria-label="Sort by Sleep Hours"
                                className="flex flex-row gap-1"
                                onClick={() => onSort('sleep_duration')}
                            >
                                <p>SLEEP HOURS</p>
                                {getSortIcon('sleep_duration')}
                            </button>

                        </Table.HeadCell>
                        <Table.HeadCell>
                            <span className="sr-only"></span>
                        </Table.HeadCell>
                        <Table.HeadCell>
                            <span className="sr-only">X</span>
                        </Table.HeadCell>
                    </Table.Head>
                    <Table.Body className="divide-y">
                        <UserActivitiesList
                            entries={sortedEntries}
                        />
                            <Table.Row>
                                <Table.Cell colSpan="7">
                                    
                            <h3
                                className="text-center text-xl p-20 span-7"
                            >
                                You Haven't Made Any Entries Yet
                            </h3>
                            </Table.Cell>
                            </Table.Row>
                    </Table.Body>
                </Table>
            </div>
        </>
    )
}
