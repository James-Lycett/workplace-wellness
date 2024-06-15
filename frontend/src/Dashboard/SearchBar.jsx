import React, { useState } from "react";

export default function SearchBar({ employees, setFilteredEmployees }) {
    const [searchString, setSearchString] = useState("")

    function filterEmployees(value) {
        const searchResults = employees.filter((employee) => employee.username.startsWith(value))
        return searchResults
    }

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
                placeholder="Search"
            />
        </form>
        </>
    )
}