import { Table } from "reactstrap";
import { useNavigate } from "react-router-dom";

/**
 * PatientList
 * Displays patient data in tabular form
 */
export const PatientList = ({ patients }) => {
  const navigate = useNavigate();

  const redirectToDetails = (patientId) => {
    // pass id param and patients data to redirect
    navigate(`/Patient/${patientId}`, { state: { patients } });
  };
  // generate headers
  const tableHeader = Object.keys(patients[0] || {}).slice(0, -4);

  return (
    <Table striped hover bordered>
      <thead>
        <tr>
          <th>ID</th>
          <th>Name</th>
        </tr>
      </thead>
      <tbody>
        {patients.map((patient) => (
          <tr
            key={patient.patient_id}
            onClick={() => redirectToDetails(patient.patient_id)}
          >
            <td>{patient.patient_id}</td>
            <td>
              {patient.first_name} {patient.last_name}
            </td>
          </tr>
        ))}
      </tbody>
    </Table>
  );
};
