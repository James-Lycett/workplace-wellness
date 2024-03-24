import React, { useEffect } from "react";
import { FaListUl } from "react-icons/fa6";
import { Link } from "react-router-dom";
import { initDropdowns } from 'flowbite'

// A nifty little dropdown menu that I got from Flowbite
export default function DropDownMenuButton({ options }) {
    useEffect(() => {
        initDropdowns()
    }, [])
    return (
        <>
        <button
            id="dropdownDefaultButton"
            data-dropdown-toggle="dropdown"
            data-dropdown-trigger="click"
            data-dropdown-offset-skidding="88"
            data-dropdown-offset-distance="10"
            data-dropdown-placement="left"
            className="text-lg"
            type="button"
        >
            <FaListUl />
        </button>
        <div id="dropdown" className="z-50 hidden bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700">
            <ul className="py-2 text-sm text-gray-700 dark:text-gray-200" aria-labelledby="dropdownDefaultButton">
                <li>
                    <Link to={options[0].route} className="block px-4 py-2 hover:bg-gray-100" reloadDocument>{options[0].option}</Link>
                </li>
                <li>
                    <Link to={options[1].route} className="block px-4 py-2 hover:bg-gray-100" reloadDocument>{options[1].option}</Link>
                </li>
                <li>
                    <Link to={options[2].route} className="block px-4 py-2 hover:bg-gray-100" reloadDocument>{options[2].option}</Link>
                </li>
                <li>
                    <Link to={options[3].route} className="block px-4 py-2 hover:bg-gray-100" reloadDocument>{options[3].option}</Link>
                </li>
                <li>
                    <Link to={options[4].route} className="block px-4 py-2 hover:bg-gray-100" reloadDocument>{options[4].option}</Link>
                </li>
            </ul>
        </div>
        </>
    )
}