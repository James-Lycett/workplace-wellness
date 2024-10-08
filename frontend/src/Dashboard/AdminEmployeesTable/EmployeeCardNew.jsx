import React, { useState, useCallback } from 'react'
import { deleteUser, listUsers } from '../../utils/api'
import sleepingPersonImage from '../../images/sleep.png'
import RemoveCardButton from '../../utils/RemoveCardButton'
import NewModal from '../Modal/newModal'
import EditEmployeeForm from './EditEmployeeForm'
import { Table } from 'flowbite-react'
import img1 from '../../images/profile1.png'
import img2 from '../../images/profile2.png'
import img3 from '../../images/profile3.png'
import { EmployeeContext } from '../../utils/contexts'

export default function EmployeeCardNew({
    employee,
    setEmployees,
    imgNumber,
}) {
    const [isModalOpen, setIsModalOpen] = useState(false)
    const [openDeleteModal, setOpenDeleteModal] = useState(false)

    const openModal = () => {
        setIsModalOpen(true)
    }

    // Fetches all users from the API to refresh list
    const loadUsers = useCallback(async () => {
        const abortController = new AbortController()

        try {
            const response = await listUsers(abortController.signal)
            setEmployees(response)
        } catch (error) {
            console.error(error)
        } finally {
            abortController.abort()
        }
    }, [setEmployees])

    // RemoveEmployeeButton functionality, deletes employee
    async function handleDelete() {
        const abortController = new AbortController()

        try {
            await deleteUser(employee.person_id, abortController.signal)
        } catch (error) {
            console.error(error)
        } finally {
            setOpenDeleteModal(false)
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
                            borderRadius: '50%',
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
                            borderRadius: '50%',
                            border: '1px solid gray',
                        }}
                        alt="sleeping person"
                    />
                )}
                {employee.username}
            </Table.Cell>
            <Table.Cell id="age">{employee.age}</Table.Cell>
            <Table.Cell id="occupation">{employee.occupation}</Table.Cell>
            <Table.Cell id="sleep-hours">{employee.sleep_disorder}</Table.Cell>
            <Table.Cell>
                <button
                    onClick={() => openModal()}
                    className="font-medium text-cyan-600 hover:underline dark:text-cyan-500"
                >
                    Edit
                </button>
            </Table.Cell>
            <Table.Cell>
                <RemoveCardButton
                    openModal={openDeleteModal}
                    setOpenModal={setOpenDeleteModal}
                    handleDelete={handleDelete}
                    option={'newEmployee'}
                />
            </Table.Cell>
            <EmployeeContext.Provider value={{ employee, setEmployees }}>
                {isModalOpen && <NewModal setIsModalOpen={setIsModalOpen} title={'Edit Employee'} form={EditEmployeeForm}/>}
            </EmployeeContext.Provider>
        </>
    )
}
