import React, { useState, useCallback } from "react";

export default function SearchBar({ employees, setFilteredEmployees }) {
    const [searchString, setSearchString] = useState("")

    const filterEmployees = useCallback((value) => {
        return employees.filter((employee) => employee.username.toLowerCase().startsWith(value.toLowerCase()))
    }, [employees])

    // Run of the mill text field change handler with the addition of a simple search function executed on each letter typed
    const handleChange = (event) => {
        const { value } = event.target
        setSearchString(value)
        setFilteredEmployees(filterEmployees(value))
    }

    return (
        <>
        <form>
            <input
                type="text"
                name="search"
                id="search"
                value={searchString}
                onChange={handleChange}
                placeholder="Search Employees"
                className="leading-tight rounded-sm"
            />
        </form>
        </>
    )
}