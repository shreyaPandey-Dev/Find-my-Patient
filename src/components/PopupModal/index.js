
import { PatientContext } from "context/PatientContext";
import { useContext } from "react";
import { Button, Modal, ModalBody, ModalFooter, ModalHeader } from "reactstrap";
import { deletePatient } from "Helper/deletePatient";



/**
 * PopupModal
 * Displays when user wants to delete a row
 */
export const PopupModal = ({ toggleModal, modal, patientId, setModal }) => {
    const { patients, setPatients } = useContext(PatientContext);

    const removePatient = () => {
        const updatedPatients = deletePatient(patientId, patients);
        setPatients(updatedPatients);
        setModal(false);
    }

    return (
        <Modal isOpen={modal} >
            <ModalHeader >Modal title</ModalHeader>
            <ModalBody>
                Are you sure you want to delete PatientID
            </ModalBody>
            <ModalFooter>
                <Button color="primary" onClick={removePatient} >
                    Delete
                </Button>{' '}
                <Button color="secondary" onClick={toggleModal}>
                    Cancel
                </Button>
            </ModalFooter>
        </Modal>
    );
};

