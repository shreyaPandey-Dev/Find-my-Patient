import { PatientContext } from "context/PatientContext";
import { useContext } from "react";
import { Button, Modal, ModalBody, ModalFooter, ModalHeader } from "reactstrap";
import { deletePatient } from "Helper/deletePatient";
import { useNavigate } from "react-router-dom";

/**
 * PopupModal
 * Displays when user wants to delete a row
 */
export const PopupModal = ({ toggleModal, modal, patientId, setModal }) => {
  const navigate = useNavigate();
  const { patients, setPatients } = useContext(PatientContext);

  const removePatient = () => {
    const updatedPatients = deletePatient(patientId, patients);
    setPatients(updatedPatients);
    setModal(false);
    // redirect to home page
    navigate(`/`);
  };

  return (
    <Modal isOpen={modal}>
      <ModalHeader>Modal title</ModalHeader>
      <ModalBody>
        Are you sure you want to delete the patient with ID {patientId} ?
      </ModalBody>
      <ModalFooter>
        <Button color="primary" onClick={removePatient}>
          Delete
        </Button>{" "}
        <Button color="secondary" onClick={toggleModal}>
          Cancel
        </Button>
      </ModalFooter>
    </Modal>
  );
};
