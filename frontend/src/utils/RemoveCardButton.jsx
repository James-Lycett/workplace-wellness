import React from "react";
import { FaX } from "react-icons/fa6";
import { HiOutlineExclamationCircle } from "react-icons/hi";
import { Button, Modal } from "flowbite-react";

export default function RemoveEmployeeButton({ openModal, setOpenModal, handleDelete, entry, loadEntries, option }) {

    return (
        <>
        <button onClick={() => setOpenModal(true)}><FaX /></button>
        <Modal show={openModal} size="md" onClose={() => setOpenModal(false)} popup>
          <Modal.Header />
          <Modal.Body>
            <div className="text-center">
              <HiOutlineExclamationCircle className="mx-auto mb-4 h-14 w-14 text-gray-400 dark:text-gray-200" />
              <h3 className="mb-5 text-lg font-normal text-gray-500 dark:text-gray-400">
                Are you sure you want to remove this {option}?
              </h3>
              <div className="flex flex-col gap-6">
                <Button color="failure" onClick={() => handleDelete()}>
                  {"Delete"}
                </Button>
                <Button color="gray" onClick={() => setOpenModal(false)}>
                  Cancel
                </Button>
              </div>
            </div>
          </Modal.Body>
        </Modal>
      </>
    )
}