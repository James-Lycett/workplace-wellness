import React, { useState, useEffect } from 'react'
import { Table } from 'flowbite-react'
import EmployeesListNew from './EmployeesListNew'
import SearchBar from './SearchBar'
import { HiChevronDown, HiChevronUp, HiSelector } from 'react-icons/hi'

export default function AdminEmployeesTable({ employees, openModal }) {
    const [filteredEmployees, setFilteredEmployees] = useState(null)
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

    const sortedEmployees = React.useMemo(() => {
        if (!filteredEmployees) {
            return []
        }

        if (sortConfig.key) {
            return [...filteredEmployees].sort((a, b) => {
                if (a[sortConfig.key] < b[sortConfig.key]) {
                    return sortConfig.direction === "ascending" ? -1 : 1
                }
                if (a[sortConfig.key] > b[sortConfig.key]) {
                    return sortConfig.direction === "ascending" ? 1 : -1
                }
                return 0
            })
        }
        return filteredEmployees
    }, [filteredEmployees, sortConfig])

    const getSortIcon = (key) => {
        if (sortConfig.key !== key) {
            return <HiSelector />
        }
        return sortConfig.direction === "ascending" ? (<HiChevronUp />) : (<HiChevronDown />)
    }

    // Create a copy of employees array to mutate leaving original employees array untouched
    useEffect(() => {
        setFilteredEmployees(employees)
    }, [employees])

    return (
        <>
        <div className="flex flex-col">
            <div className="ps-3 py-3">
                <SearchBar
                    employees={employees}
                    setFilteredEmployees={setFilteredEmployees}
                />
            </div>
            <div className="overflow-x-auto max-h-96 md:max-h-full md:w-full overflow-y-auto snap-y snap-mandatory scroll-py-14">
                <Table hoverable>
                    <Table.Head className="sticky top-0 bg-white z-10">
                        <Table.HeadCell>
                                <button aria-label='Sort by Username' className="flex flex-row gap-1" onClick={() => onSort("username")}>
                                    <p>USER</p>
                                    {getSortIcon("username")}
                                </button>
                        </Table.HeadCell>
                        <Table.HeadCell>
                                <button aria-label='Sort by Age' className="flex flex-row gap-1" onClick={() => onSort("age")}>
                                    <p>AGE</p>
                                    {getSortIcon("age")}
                                </button>
                        </Table.HeadCell>
                        <Table.HeadCell>
                                <button aria-label='Sort by Occupation' className="flex flex-row gap-1" onClick={() => onSort("occupation")}>
                                    <p>OCCUPATION</p>
                                    {getSortIcon("occupation")}
                                </button>
                        </Table.HeadCell>
                        <Table.HeadCell>
                                <button aria-label='Sort by Sleep Disorder' className="flex flex-row gap-1" onClick={() => onSort("sleep_disorder")}>
                                <p>SLEEP DISORDER</p>
                                    {getSortIcon("sleep_disorder")}
                                </button>
                        </Table.HeadCell>
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
                            employees={sortedEmployees}
                            setEmployees={setFilteredEmployees}
                        />
                    </Table.Body>
                </Table>
            </div>
        </div>
        </>
    )
}
