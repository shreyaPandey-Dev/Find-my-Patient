import { useContext, useEffect, useState } from "react";
import { PatientContext } from "context/PatientContext";
import { SearchPatientForm } from "components/SearchPatientForm";
import { PatientList } from "components/PatientList";



/**
 * PatientSearchList
 * Displays Search form and Corresponding List of Patients
 */
export const PatientSearchList = () => {
    const { patients, setPatients } = useContext(PatientContext);
    const [submittedFormData, setSubmittedFormData] = useState([]);
    const [searchedData, setSearchedData] = useState([]);


    useEffect(() => {

    }, [setPatients]);



    return (
        <>
            <SearchPatientForm patients={patients || []}
                setSubmittedFormData={setSubmittedFormData}
                setPatients={setPatients}
            />
            <PatientList patients={patients || []}
            />
        </>
    );
};

