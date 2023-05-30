import { useContext, useEffect, useState } from "react";
import { PatientContext } from "context/PatientContext";
import { fetchPatients } from "services/api";
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
        const fetchData = async () => {
            try {
                await fetchPatients(setPatients);
            } catch (error) {
                console.error('Error fetching patients:', error);
            }
        };

        fetchData();
    }, []);



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

