import { useContext, useEffect, useState } from "react";
import { PatientContext } from "context/PatientContext";
import { SearchPatientForm } from "components/SearchPatientForm";
import { PatientList } from "components/PatientList";
import { fetchPatients } from "services/api";
import { DropdownFilter } from "components/DropdownFilter";



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

        const searchedPatientsStr = sessionStorage.getItem("searchedPatients");
        if (searchedPatientsStr) {
            const searchedPatients = JSON.parse(searchedPatientsStr);
            setPatients(searchedPatients);
        }
        // } else {
        //     await fetchPatients(setPatients);
        // }

    }, [setPatients]);



    return (
        <>

            <SearchPatientForm patients={patients || []}
                setSubmittedFormData={setSubmittedFormData}
                setPatients={setPatients}
            />
            <DropdownFilter />
            <PatientList patients={patients || []}
            />
        </>
    );
};

