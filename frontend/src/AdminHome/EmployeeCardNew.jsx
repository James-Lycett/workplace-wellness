import React, { useState } from 'react'
import { deleteUser } from '../utils/api'
import sleepingPersonImage from './sleeping_person.jpg'
import { FaEyeSlash, FaEye } from 'react-icons/fa6'
import RemoveCardButton from '../utils/RemoveCardButton'
import img1 from './1.png'
import img2 from './2.png'
import img3 from './3.png'

export default function EmployeeCard({
    employee,
    setError,
    loadUsers,
    imgNumber,
}) {
    const [hidden, setHidden] = useState(false)
    const [openModal, setOpenModal] = useState(false)

    // RemoveEmployeeButton functionality, deletes employee
    async function handleDelete() {
        const abortController = new AbortController()

        try {
            await deleteUser(employee.person_id, abortController.signal)
        } catch (er) {
            setError(er)
        } finally {
            setOpenModal(false)
            loadUsers()
        }
        return () => abortController.abort()
    }

    // Hides this card
    const toggleVisibility = () => {
        hidden ? setHidden(false) : setHidden(true)
    }

    const images = {
        1: img1,
        2: img2,
        3: img3,
        4: img1,
        5: img2,
        6: img3,
        7: img1,
        8: img2,
        9: img3,
        10: img1,
    }

    return (
        <>
            <Table.Cell>
                <input type="checkbox"></input>
            </Table.Cell>
            <Table.Cell
                id="user"
                className="whitespace-nowrap font-medium text-gray-900 dark:text-white"
            >
                {imgNumber in images ? (
                    <img
                        src={images[imgNumber]}
                        style={{ width: '100px' }}
                        alt={`Employee ${imgNumber}`}
                    />
                ) : (
                    <img
                        src={sleepingPersonImage}
                        style={{ width: '100px' }}
                        alt="sleeping person"
                    />
                )}
                {employee.username}
            </Table.Cell>
            <Table.Cell id="age">{employee.age}</Table.Cell>
            <Table.Cell id="stress-lvl">{employee.stress_level}</Table.Cell>
            <Table.Cell id="sleep-hours">{employee.sleep_duration}</Table.Cell>
            <Table.Cell>
                <a
                    href="#"
                    className="font-medium text-cyan-600 hover:underline dark:text-cyan-500"
                >
                    Edit
                </a>
            </Table.Cell>
            <Table.Cell>
                <RemoveCardButton
                    openModal={openModal}
                    setOpenModal={setOpenModal}
                    handleDelete={handleDelete}
                    option={'employee'}
                />
            </Table.Cell>
            <Table.Cell>
                <button onClick={toggleVisibility}>
                    <FaEyeSlash />
                </button>
            </Table.Cell>
        </>
    )
}
