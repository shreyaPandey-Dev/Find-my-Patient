import { useContext, useEffect, useState } from "react";
import { PatientContext } from "context/PatientContext";
import { SearchPatientForm } from "components/SearchPatientForm";
import { PatientList } from "components/PatientList";
import { fetchPatients } from "services/api";
import { Loader } from "components/Loader";

/**
 * PatientSearchList
 * Displays Search form and Corresponding List of Patients
 */
export const PatientSearchList = () => {
  const { patients, setPatients } = useContext(PatientContext);
  const [submittedFormData, setSubmittedFormData] = useState([]);
  const [loading, setLoading] = useState(false);
  // const [resetForm, setResetForm] = useState(false);

  // eslint-disable-next-line react-hooks/exhaustive-deps
  useEffect(() => {
    fetchPatients(setPatients, setLoading);
  }, [setPatients]);

  return (
    <>
      {loading && <Loader loading={loading} />}
      <div>
        <SearchPatientForm
          setSubmittedFormData={setSubmittedFormData}
          setLoading={setLoading}
        />
      </div>

      <PatientList patients={patients || []} setLoading={setLoading} />
    </>
  );
};
