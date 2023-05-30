import { Patient } from "components/Patient";
import { useState } from "react";
import { useParams } from "react-router-dom";



/**
 * PatientDetails
 * Displays detail of Patient , a wrapper component
 */
export const PatientDetails = () => {
    const [modal, setModal] = useState(false);

    const toggleModal = () => setModal(!modal);

    const params = useParams();
    const { patientId } = params;
    return (
        <Patient patientId={patientId} toggleModal={toggleModal} modal={modal} setModal={setModal} />
    );
};

