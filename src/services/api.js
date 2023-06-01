export const fetchPatients = async (setPatients) => {

    try {
        const response = await fetch("mock_data.json");

        const patients = await response.json();


        const searchedPatientsJson = sessionStorage.getItem("searchedPatients");
        if (searchedPatientsJson) {
            const searchedPatients = JSON.parse(searchedPatientsJson);
            setPatients(searchedPatients);
        } else {
            setPatients(patients)
        }

    } catch (error) {
        console.error("Error fetching patients:", error);
    } finally {
        // setLoading(false);
    }
};