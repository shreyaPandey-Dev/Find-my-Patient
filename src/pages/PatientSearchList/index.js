import { useContext, useEffect, useState } from "react";
import { PatientContext } from "context/PatientContext";
import { SearchPatientForm } from "components/SearchPatientForm";
import { PatientList } from "components/PatientList";
import { Loader } from "components/Loader";
import { fetchPatients } from "services/api";
import "./PatientSearchList.scss";
/**
 * PatientSearchList
 * Displays Search form and Corresponding List of Patients
 */
export const PatientSearchList = () => {
  const { patients, setPatients } = useContext(PatientContext);
  const [loading, setLoading] = useState(false);

  // eslint-disable-next-line react-hooks/exhaustive-deps
  useEffect(() => {
    fetchPatients(setPatients, setLoading);
  }, [setPatients]);

  return (
    <>
      {loading && <Loader loading={loading} />}
      <div className="form-div">
        <SearchPatientForm />
      </div>

      <PatientList patients={patients || []} />
    </>
  );
};
