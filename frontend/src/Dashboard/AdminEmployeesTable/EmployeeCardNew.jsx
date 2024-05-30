import React, { useState } from 'react'
import { deleteUser } from '../../utils/api'
import sleepingPersonImage from './images/sleep.png'
import RemoveCardButton from '../../utils/RemoveCardButton'
import { Checkbox, Table } from 'flowbite-react'
import img1 from './images/1.png'
import img2 from './images/2.png'
import img3 from './images/3.png'

export default function EmployeeCarNew({
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
                <Checkbox />
            </Table.Cell>
            <Table.Cell
                id="user"
                className="flex justify-start items-center whitespace-nowrap font-medium text-gray-900 dark:text-white"
            >
                {imgNumber in images ? (
                    <img
                        src={images[imgNumber]}
                        style={{
                            width: '50px',
                            margin: '0 1rem 0 0 ',
                            'border-radius': '50%',
                            border: '1px solid gray',
                        }}
                        alt={`Employee ${imgNumber}`}
                    />
                ) : (
                    <img
                        src={sleepingPersonImage}
                        style={{
                            width: '50px',
                            margin: '0 1rem 0 0 ',
                            'border-radius': '50%',
                            border: '1px solid gray',
                        }}
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
        </>
    )
}
