import { useParams, useNavigate } from "react-router-dom";
import { Badge, Button, Card, CardBody, CardSubtitle, CardText, CardTitle } from "reactstrap";
import { getPatientById } from "Helper/getPatientById";
import { useContext } from "react";
import { PatientContext } from "context/PatientContext";
import { PopupModal } from "components/PopupModal";

/**
 * Patient
 * Displays Patient Row
 */
export const Patient = ({ toggleModal, modal, setModal }) => {
    const { patients, setPatients } = useContext(PatientContext);
    const { patientId } = useParams();
    const patientRecord = getPatientById(patientId, patients);
    const navigate = useNavigate();


    const handleRemovePatient = (patientId, toggleModal) => {
        // open popup modal
        setModal(true);
    };
    const handleGoBack = () => {
        navigate("/"); // Replace "/patient-search" with the actual path of the PatientSearchList component
    };

    return (
        <>

            <Card
                style={{
                    width: '25rem',
                    marginLeft: '35%'
                }}
            >
                <img
                    alt="Sample"
                    src={patientRecord?.avatar}
                />
                <CardBody>
                    <CardTitle tag="h5">
                        {patientRecord?.first_name}&nbsp;{patientRecord?.last_name}
                    </CardTitle>
                    <CardSubtitle
                        className="mb-2 text-muted"
                        tag="h6"
                    >
                        {patientRecord?.email}
                    </CardSubtitle>
                    <CardText>
                        {patientRecord?.age},
                        {patientRecord?.gender}
                    </CardText>
                    <Button color="danger" onClick={() => handleRemovePatient(patientId, toggleModal)}>Delete this record</Button>
                    <br />
                    <Badge
                        className="text-dark"
                        color="light"
                        onClick={handleGoBack}
                    >
                        Go Back
                    </Badge>
                </CardBody>
            </Card>

            <PopupModal toggleModal={toggleModal} modal={modal} patientId={patientId} setModal={setModal} ></PopupModal>
        </>
    );
};


