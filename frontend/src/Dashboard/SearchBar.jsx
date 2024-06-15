import React from "react";

export default function SearchBar() {
    return (
        <>
        <form>
            <input
                type="string"
                name="search"
                id="search"
                value={searchString}
            />
        </form>
        </>
    )
}