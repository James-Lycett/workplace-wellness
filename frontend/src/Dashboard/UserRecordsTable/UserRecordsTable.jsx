import React, { useState } from 'react'
import { Table } from 'flowbite-react'
import { HiChevronDown, HiChevronUp, HiSelector } from 'react-icons/hi'
import UserActivitiesList from './UserActivitiesList'

export default function UserRecordsTable({ userId, entries, setEntries }) {
    const [sortConfig, setSortConfig] = useState({
        key: "",
        direction: "descending",
    })

    /* 
        Click handler for sort buttons
        When button is clicked it sends its unique key (e.g., "date") to onSort which sets the
        sortConfig state with that key (aka "which column/property are we working with?") and
        toggles sort order (ascending/descending)
        Setting the sortConfig state triggers the sortedEntries callback to sort the entries according to the info in sortConfig state
    */
    const onSort = (key) => {
        let direction = "descending"
        if (sortConfig.key === key && sortConfig.direction === "descending") {
            direction = "ascending"
        }
        setSortConfig({ key, direction })
    }

    const sortedEntries = React.useMemo(() => {
        if (sortConfig.key) {
            return [...entries].sort((a, b) => {
                if (a[sortConfig.key] < b[sortConfig.key]) {
                    return sortConfig.direction === "ascending" ? -1 : 1
                }
                if (a[sortConfig.key] > b[sortConfig.key]) {
                    return sortConfig.direction === "ascending" ? 1 : -1
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
        return sortConfig.direction === "ascending" ? (<HiChevronUp />) : (<HiChevronDown />)
    }

    return (
        <>
            <div className="overflow-x-auto max-h-96 md:max-h-full overflow-y-auto snap-y snap-mandatory">
                <Table hoverable>
                    <Table.Head className="sticky top-0 bg-white z-10">
                        <Table.HeadCell>
                            <div className="flex flex-row gap-1">
                                <p>Date</p>
                                <button onClick={() => onSort("date")}>
                                    {getSortIcon("date")}
                                </button>
                            </div>
                        </Table.HeadCell>
                        <Table.HeadCell>
                            <div className="flex flex-row gap-1">
                                <p>Steps</p>
                                <button onClick={() => onSort("daily_steps")}>
                                    {getSortIcon("daily_steps")}
                                </button>
                            </div>
                        </Table.HeadCell>
                        <Table.HeadCell>
                            <div className="flex flex-row gap-1">
                                <p>Heart Rate</p>
                                <button onClick={() => onSort("heart_rate")}>
                                    {getSortIcon("heart_rate")}
                                </button>
                            </div>
                        </Table.HeadCell>
                        <Table.HeadCell>
                            <div className="flex flex-row gap-1">
                                <p>BMI Category</p>
                                <button onClick={() => onSort("bmi_category")}>
                                    {getSortIcon("bmi_category")}
                                </button>
                            </div>
                        </Table.HeadCell>
                        <Table.HeadCell>
                            <div className="flex flex-row gap-1">
                                <p>Stress Level</p>
                                <button onClick={() => onSort("stress_level")}>
                                    {getSortIcon("stress_level")}
                                </button>
                            </div>
                        </Table.HeadCell>
                        <Table.HeadCell>
                            <div className="flex flex-row gap-1">
                                <p>Sleep Hours</p>
                                <button onClick={() => onSort("sleep_duration")}>
                                    {getSortIcon("sleep_duration")}
                                </button>
                            </div>
                        </Table.HeadCell>
                        <Table.HeadCell>
                            <span className="sr-only">X</span>
                        </Table.HeadCell>
                    </Table.Head>
                    <Table.Body className="divide-y">
                        <UserActivitiesList
                            userId={userId}
                            entries={sortedEntries}
                            setEntries={setEntries}
                        />
                    </Table.Body>
                </Table>
            </div>
        </>
    )
}
