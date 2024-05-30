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

    if (hidden) {
        return (
            <>
                <div className="flex justify-between p-2 my-2 hover:bg-gray-100">
                    <h3 className="font-bold">{employee.username}</h3>
                    <button onClick={toggleVisibility} className="text-lg">
                        <FaEye />
                    </button>
                </div>
            </>
        )
    } else {
        return (
            <>
                <div className="flex relative w-auto p-2 my-2 hover:bg-gray-100">
                    <div className="flex-none w-32">
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
                    </div>

                    <div className="flex-auto w-64">
                        <h3 className="font-bold">{employee.username}</h3>
                        <h4>Age: {employee.age}</h4>
                        <h4>Stress Level: {employee.stress_level}</h4>
                        <h4>Sleep Hours: {employee.sleep_duration}</h4>
                    </div>
                    <div className="flex flex-col justify-around text-xl">
                        <RemoveCardButton
                            openModal={openModal}
                            setOpenModal={setOpenModal}
                            handleDelete={handleDelete}
                            option={'employee'}
                        />
                        <button onClick={toggleVisibility}>
                            <FaEyeSlash />
                        </button>
                    </div>
                </div>
            </>
        )
    }
}
