import { Table } from "reactstrap";
import { useNavigate } from "react-router-dom";

/**
 * PatientList
 * Displays patient data in tabular form
 */
export const PatientList = ({ patients }) => {
  const navigate = useNavigate();

  const redirectToDetails = (patientId) => {
    // pass id param and patients data
    navigate(`/Patient/${patientId}`, { state: { patients } });
  };

  const tableHeader = Object.keys(patients[0] || {}).slice(0, -4);

  return (
    <Table striped hover bordered>
      <thead>
        <tr>
          {tableHeader?.map((heading, index) => {
            return <th key={index}>{heading}</th>;
          })}
        </tr>
      </thead>
      <tbody>
        {patients.map((patient) => (
          <tr
            key={patient.patient_id}
            onClick={() => redirectToDetails(patient.patient_id)}
          >
            <td>{patient.patient_id}</td>
            <td>{patient.first_name}</td>
            <td>{patient.last_name}</td>
            {/* <td>{patient.email}</td>
            <td>{patient.gender}</td>
            <td>{patient.age}</td> */}
          </tr>
        ))}
      </tbody>
    </Table>
  );
};
