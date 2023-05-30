import { Table } from 'reactstrap';
import { useNavigate } from 'react-router-dom';


export const PatientList = ({ patients }) => {
    const navigate = useNavigate();

    const redirectToDetails = (patientId) => {
        // pass id param and patients data
        navigate(`/Patient/${patientId}`, { state: { patients } });
    };

    // after search add searchedData
    // console.log("patients  received in PatientList ", patients);

    const tableHeader = Object.keys(patients[0] || {}).slice(0, -1);

    return (
        <Table striped hover bordered>
            <thead>
                <tr>
                    {tableHeader?.map((heading, index) => {
                        return <th key={index}>{heading}</th>
                    })}
                </tr>
            </thead>
            <tbody>
                {patients.map(patient => (
                    <tr key={patient.patient_id} onClick={() => redirectToDetails(patient.patient_id)}>
                        <td>{patient.patient_id}</td>
                        <td>{patient.first_name}</td>
                        <td>{patient.last_name}</td>
                        <td>{patient.email}</td>
                        <td>{patient.gender}</td>
                        <td>{patient.age}</td>
                    </tr>
                ))}
            </tbody>
        </Table>
    );
};

